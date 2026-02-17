const express = require("express");
const productRoutes = require('./routes/productRoutes');
const fs = require("fs");

const app = express();
app.use(express.json());

app.use("/products", productRoutes);

app.listen(3000, () => {
    console.log('server running on port 3000')
})