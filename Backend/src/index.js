const express = require("express");
const productsRoutes = require("./routes/product.routes");
const categoriesRoutes = require("./routes/category.routes");
const salesRoutes = require("./routes/sales.routes");


const app = express();

const PORT = 3000;

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/api", productsRoutes);
app.use("/api", categoriesRoutes);
app.use("/api",salesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
