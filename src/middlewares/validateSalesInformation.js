const { errorMap } = require('../utils/errorMap');

const validateIdField = (req, res, next) => {
  const sales = req.body;
  const everyoneHasId = sales.every((sale) => 'porductId' in sale);

  if (everyoneHasId) return next();

  return res.status(errorMap.INVALID_FIELD).json({ message: '"productId" is required' });
};

const validateQuantityField = (req, res, next) => {
  const sales = req.body;
  const everyoneHasQuantity = sales.every((sale) => 'quantity' in sale);

  if (everyoneHasQuantity) return next();

  return res.status(errorMap.INVALID_FIELD).json({ message: '"quantity" is required' });
};

module.exports = {
  validateIdField,
};
