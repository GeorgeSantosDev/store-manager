const express = require('express');
const { productsController } = require('../controllers/index');

const router = express.Router();

router.get('/', productsController.findAllProducts);
router.get('/:id', productsController.findProductById);

module.exports = router;
