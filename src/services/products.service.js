const { productsModel } = require('../models/index');
const validations = require('./validations/index');

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
  const productExist = await validations.productNameValidation.productAlreadyExist(name);
  if (productExist) return { type: 'PRODUCT_ALREADY_EXIST', message: 'Product already exist' };

  const [{ insertId }] = await productsModel.insert(name);
  const findNewPRoduct = await productsModel.findById(insertId);

  if (findNewPRoduct) return { type: null, message: findNewPRoduct };

  return { type: 'PRODUCT_NOT_CREATED', message: 'Product not created' };
};

const updateItem = async (id, name) => {
  const product = await validations.productValidation.productExist([{ productId: id }]);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  
  const productUpdated = await productsModel.update(id, name);

  if (productUpdated) return { type: null, message: { id, name } };
};

const deleteItem = async (id) => {
  const product = await validations.productValidation.productExist([{ productId: id }]);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const productDeleted = await productsModel.deleteProduct(id);

  if (productDeleted) return { type: null, message: productDeleted };
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateItem,
  deleteItem,
};
