const express = require("express");
const { prisma } = require("../db");

const router = express.Router();

router.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

router.get("/products/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const productFound = await prisma.product.findFirst({
    where: { 
        id : parseInt(req.params.id),
    },
    include: {
        category : true,
    }
  });
  if(!productFound)
    return res.status(404).json({error: "Producto no encontrado."})

  return res.json(productFound);
});

router.put("/products/:id", async (req, res) => {
  const productUpdate = await prisma.product.update({
    where : {
        id: parseInt(req.params.id)
    },
    data: req.body
  })
  return res.json(productUpdate);
  });

router.post("/products", async (req, res) => {
  const newProduct = await prisma.product.create({
    data: req.body,
  });
  res.json(newProduct);
});

router.delete("/products/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const productDelete = await prisma.product.delete({
    where: { 
        id : parseInt(req.params.id),
    }
  });
  if(!productDelete)
    return res.status(404).json({error: "Producto no encontrado."})
  
  return res.json(productDelete);
});

module.exports = router;
