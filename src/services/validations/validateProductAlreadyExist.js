const { productsModel } = require('../../models/index');

const productAlreadyExist = async (name) => {
  const response = await productsModel.findProductByName(name);
  return response;
};

module.exports = { productAlreadyExist };