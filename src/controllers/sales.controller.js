const { salesService } = require('../services/index');
const errorMap = require('../utils/errorMap');

const addNewSales = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.insertNewSale(sales);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

const getSales = async (req, res) => {
  const { message } = await salesService.findAllSales();

  res.status(200).json(message);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { message } = await salesService.findSaleById(id);

  res.status(200).json(message);
};

module.exports = {
  addNewSales,
  getSales,
  getSaleById,
};
