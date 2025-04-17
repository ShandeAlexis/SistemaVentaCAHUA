const express = require("express");
const productsRoutes = require("./routes/product.routes");
const categoriesRoutes = require("./routes/category.routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
