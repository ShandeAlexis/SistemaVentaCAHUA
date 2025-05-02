const express = require("express");
const { prisma } = require("../config/db");

const router = express.Router();

router.post("/sales", async (req, res) => {
    const { userId, items } = req.body;
  
    if (!userId || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Datos inválidos" });
    }
  
    try {
      // Verificar si el usuario existe ANTES DE HACER NADA
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
  
      // Cargar productos y validar stock en una sola fase
      const saleItemsData = [];
      let total = 0;
  
      for (const item of items) {
        const product = await prisma.product.findUnique({
          where: { id: item.productId },
        });
  
        if (!product) {
          return res.status(404).json({ error: `Producto ID ${item.productId} no encontrado.` });
        }
  
        if (product.stock < item.quantity) {
          return res.status(400).json({ error: `Stock insuficiente para el producto ${product.name}.` });
        }
  
        saleItemsData.push({
          productId: item.productId,
          quantity: item.quantity,
          price: product.price,
        });
  
        total += product.price * item.quantity;
      }
  
      const result = await prisma.$transaction(async (tx) => {
        // Reducir el stock de todos los productos
        for (const item of saleItemsData) {
          await tx.product.update({
            where: { id: item.productId },
            data: {
              stock: { decrement: item.quantity },
            },
          });
        }
  
        // Crear la venta
        const sale = await tx.sale.create({
          data: {
            userId,
            total,
            items: {
              create: saleItemsData,
            },
          },
          include: {
            items: true,
          },
        });
  
        return sale;
      });
  
      return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: "Error al procesar la venta" });
    }
});
  


router.get("/sales", async (req, res) => {
    const sales = await prisma.sale.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: {
              select: {
                id: true
              }
            }
          }
        }
      }
    });
  
    res.json(sales);
  });
  
module.exports = router;