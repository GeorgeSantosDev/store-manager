const { salesModel } = require('../models');

const insertNewSale = async (sales) => {
  const promises = sales.map((sale) => salesModel.insertSales(sale));
  const newSales = await Promise.all(promises);

  if (newSales) return { type: null, message: newSales };

  return { type: 'SALE_NOT_ADDED', message: 'Sale not added' };
};

module.exports = {
  insertNewSale,
};
