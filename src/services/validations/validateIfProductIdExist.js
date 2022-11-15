const { salesModel } = require('../../models/index');

const productExist = async (sales) => {
  const promise = sales.map(({ productId }) => salesModel.findById(Number(productId)));
  const response = await Promise.all(promise);
  const allProductsExist = response.every((id) => id);

  return allProductsExist;
};

module.exports = {
  productExist,
};
