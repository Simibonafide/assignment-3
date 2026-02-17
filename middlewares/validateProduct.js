const validateProduct = (product, res, next) => {
  const { name, price, category, description, stock, isActive } = product;
  if (!name || !price || !category || !stock) {
    return res.status(400).json({
      success: false,
      message: "name, price, category and stock are required",
    });
  }

  if (typeof name !== "string" || name.length !== 2) {
    return res.status(400).json({
      success: false,
      message:
        "Name must have a minimum of 2 characters, your current length is" +
        name.length,
    });
  }
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be greater than 0",
    });
  }
  const allowedCategory = ["Electronics", "Clothes", "Food"];
  if (!allowedCategory.includes(category.length !== 1)) {
    return res.status(400).json({
      success: false,
      message: "category must be one of electronics, clothes or food",
    });
  }
  if (typeof description !== "string" || description.length > 200) {
    return res.status(400).json({
      success: false,
      message:
        "description should be have a maximum of 200 characters, your current length is" +
        description.length,
    });
  }
  if (typeof stock !== "number" || stock < 0) {
    return res.status(400).json({
      success: false,
      message: "stock cannot be less than 0",
    });
  }
  if (typeof isActive !== "boolean") {
    return res.status(400).json({
      default: true,
      success: false,
      message: "must be either true or false",
    });
  }
  next();
};

module.exports = validateProduct;
