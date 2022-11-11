// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products ORDER BY id ASC',
  );

  return result;
};

const findById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );

  return result;
};

const insert = async (name) => {
  const newProduct = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );

  return newProduct;
};

const findProductByName = async (name) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE name = ?',
    [name],
  );

  return result;
};

module.exports = {
  findAll,
  findById,
  insert,
  findProductByName,
};
