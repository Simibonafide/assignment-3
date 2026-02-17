const express = require("express");
const router = express.Router();
const validateProduct = require("../middlewares/validateProduct");
const productController = require("../controllers/productController");
const { getAll } = require("../services/productService");

router.get("/:id", productController.getProduct);
router.post("/", validateProduct, productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
