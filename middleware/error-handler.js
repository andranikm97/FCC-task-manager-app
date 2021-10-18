const { CustomError } = require('../errors/customError');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).json({ err: err });
};
module.exports = errorHandlerMiddleware;
