const { salesModel } = require('../models');
const validations = require('./validations/validateIfProductIdExist');

const insertNewSale = async (sales) => {
  const allIdsValid = await validations.productExist(sales);

  if (!allIdsValid) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  const id = await salesModel.insertSaleId();
  const salesWithId = sales.map((sale) => ({ ...sale, saleId: id }));

  const promises = salesWithId.map((sale) => salesModel.insertSales(sale));
  const newSales = await Promise.all(promises);

  if (newSales) return { type: null, message: { id, itemsSold: sales } };

  return { type: 'SALE_NOT_ADDED', message: 'Sale not added' };
};

module.exports = {
  insertNewSale,
};
