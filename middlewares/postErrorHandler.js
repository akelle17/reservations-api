const logger = require('../utils/logger');

module.exports = function (err, req, res, next) {
  if (err) {
    logger.error(err)
  }

  return res.status(500).json({ error: 'Something went wrong'});
}