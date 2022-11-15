// const camelize = require('camelize');
const snakeize = require('snakeize');
const connection = require('./connection');
const currentDate = require('../utils/currentDate');

const insertSaleId = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (?)',
    [currentDate()],
  );

  return insertId;
};

const insertSales = async (sale) => {
  const columns = Object.keys(snakeize(sale));
  const values = Object.values(sale);
  const placeholders = Object.values(sale).map((_) => '?');

  const newSale = await connection.execute(
    `INSERT INTO StoreManager.sales_products (${columns}) VALUES (${placeholders})`,
    [...values],
  );

  return newSale;
};

module.exports = {
  insertSales,
  insertSaleId,
};
