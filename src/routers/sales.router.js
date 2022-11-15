const express = require('express');
const { salesController } = require('../controllers/index');

const router = express.Router();

router.post('/', salesController.addNewSales);

module.exports = router;
