const { JsonWebTokenError, TokenExpiredError } = require("jsonwebtoken");

module.exports = (error, req, res, next) => {
  // ถ้า error มาจาก jsonwebtoken // หรือ token หมดอายุ
  if (
    error instanceof JsonWebTokenError ||
    error instanceof TokenExpiredError
  ) {
    error.statusCode = 401;
  }

  res
    .status(error.statusCode || 500)
    .json({ message: error.message, field: error.field });
};
