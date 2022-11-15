const { salesService } = require('../services/index');
const errorMap = require('../utils/errorMap');

const addNewSales = async (req, res) => {
  const sales = req.body;
  const { type, message } = await salesService.insertNewSale(sales);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(201).json(message);
};

module.exports = {
  addNewSales,
};
