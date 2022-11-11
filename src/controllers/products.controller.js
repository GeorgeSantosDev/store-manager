const { productsService } = require('../services/index');
const errorMap = require('../utils/errorMap');

const findAllProducts = async (_req, res) => {
  const { type, message } = await productsService.getAllProducts();
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const findProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getProductById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  findAllProducts,
  findProductById,
};