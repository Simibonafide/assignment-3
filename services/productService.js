const fs = require("fs");
const DATA_FILE = "../repository/products.json";

function readData() {
  const data = fs.readFileSync(DATA_FILE, "utf8");
  if (!data.trim()) {
    return [];
  }
  return JSON.parse(data);
}

function writeData(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

const getAllProducts = () => readData();

const getProductById = (id) => {};

const createProduct = (productData) => {
  const products = readData();
  const date = new Date();
  const newProduct = {
    id: Date.now(),
    ...productData,
    dateAdded: date.toISOString(),
  };
  products.push(newProduct);
  writeData(products);
  return newProduct;
};

const updateProduct = (id, updates) => {
  const products = readData();
  const index = products.findIndex((product) => product.id === id);
  if (index === -1) return null;

  products[index] = { ...products[index], ...updates };
  writeData(products);
  return products[index];
};

const deleteProduct = (id) => {
  const products = readData();
  const filtered = products.filter((product) => product.id !== Number(id));
  console.log(filtered);
  if (products.length === filtered.length) return null;
  writeData(filtered);
  return true;
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
