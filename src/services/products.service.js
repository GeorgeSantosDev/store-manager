const { productsModel } = require('../models/index');

const getAllProducts = async () => {
  const products = await productsModel.findAll();

  if (products) return { type: null, message: products }; 

  return { type: 'INTERNAL_SERVER_ERROR', message: 'Internal server error!' };
};

const getProductById = async (id) => {
  const product = await productsModel.findById(id);

  if (product) return { type: null, message: product };

  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  getAllProducts,
  getProductById,
};
