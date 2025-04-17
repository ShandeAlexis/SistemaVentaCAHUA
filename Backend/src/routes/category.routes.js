const express = require("express");
const { prisma } = require("../db");

const router = express.Router();

router.get("/categories", async (req, res) => {
  const categories = await prisma.category.findMany({
    include: {
        products :true
    }
  });
  res.json(categories);
});

module.exports = router;
