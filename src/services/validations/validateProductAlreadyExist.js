const { productsModel } = require('../../models/index');

module.exports = async (name) => {
  const response = await productsModel.findProductByName(name);
  return response;
};
