const productService = require("../services/productService");

const getProduct = (req, res) => {
  const products = productService.getAll;
  res.json({
    success: true,
    data: products,
  });
};

const createProduct = (req, res) => {
  const product = productService.createProduct(req.body);
  res.status(201).json({
    success: true,
    data: product,
  });
};

const updateProduct = (req, res) => {
  const updated = productService.updateProduct(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({
      success: true,
      date: updated,
    });
  }
};

const deleteProduct = (req, res) => {
  const deleted = productService.deleteProduct(req.params.id);
  if (!deleted) {
    return res.status(404).json({
      success: false,
    });
  }
  res.status(204).json();
};

module.exports = {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
