const productValidation = require('./validateIfProductIdExist');
const productNameValidation = require('./validateProductAlreadyExist');
const salesValidation = require('./validateIfSaleIdExist');

module.exports = {
  productNameValidation,
  productValidation,
  salesValidation,
};
