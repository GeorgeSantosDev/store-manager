const { errorMap } = require('../utils/errorMap');

const validateIdField = (req, res, next) => {
  const sales = req.body;
  const everyoneHasId = sales.every((sale) => 'porductId' in sale);

  if (everyoneHasId) return next();

  return res.status(errorMap.INVALID_FIELD).json({ message: '"productId" is required' });
};

module.exports = {
  validateIdField,
};
