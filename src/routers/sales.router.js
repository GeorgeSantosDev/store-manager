const express = require('express');
const { salesController } = require('../controllers/index');
const validateSalesInformation = require('../middlewares/validateSalesInformation');

const router = express.Router();

router.post('/',
  validateSalesInformation.validateIdField,
  validateSalesInformation.validateQuantityField,
  validateSalesInformation.validateQuantityFieldValue,
  salesController.addNewSales);

module.exports = router;
