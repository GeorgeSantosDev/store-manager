const { salesModel } = require('../models');
const validations = require('./validations/validateIfSaleIdExist');

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

const findAllSales = async () => {
  const allSales = await salesModel.findAll();

  if (allSales) return { type: null, message: allSales };

  return { type: 'INTERNAL_SERVER_ERROR', message: 'Internal server error!' };
};

const findSaleById = async (id) => {
  const findSale = await validations.saleExist(id);

  if (!findSale[0]) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };

  const sale = await salesModel.findById(id);

  if (sale) return { type: null, message: sale };
};

module.exports = {
  insertNewSale,
  findAllSales,
  findSaleById,
};
