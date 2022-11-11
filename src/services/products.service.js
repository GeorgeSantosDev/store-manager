const { productsModel } = require('../models/index');
const productAlreadyExist = require('./validations/validateProductAlreadyExist');

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

const insertProduct = async (name) => {
  const productCreated = await productsModel.insert(name);
  const productExist = await productAlreadyExist(name);

  if (productExist) return { type: 'PRODUCT_ALREADY_EXIST', message: 'Product already exist' };

  if (productCreated) return { type: null, message: productCreated };

  return { type: 'PRODUCT_NOT_CREATED', message: 'Product not created' };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
};
