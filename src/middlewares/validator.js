const createError = require("../utils/createError");
const { registerSchema, loginSchema, adminRegisterSchema, adminLoginSchema } = require("../validator/auth-validator");

const validator = {};

validator.register = (req, res, next) => {
  const { value, error } = registerSchema.validate(req.body);

  if (error) {
    createError({
      message: error.details[0].message,
      statusCode: 400,
    });
  }

  req.input = value;
  next();
};

validator.login = (req, res, next) => {
  const { value, error } = loginSchema.validate(req.body);

  if (error) {
    createError({
      message: error.details[0].message,
      statusCode: 400,
    });
  }
  req.input = value;
  next();
};

validator.adminRegister = (req, res, next) => {
  const { value, error } = adminRegisterSchema.validate(req.body);

  if (error) {
    createError({
      message: error.details[0].message,
      statusCode: 400,
    });
  }

  req.input = value;
  next();
}

validator.adminLogin = (req, res, next) => {
  const { value, error } = adminLoginSchema.validate(req.body);

  if (error) {
    createError({
      message: error.details[0].message,
      statusCode: 400,
    });
  }

  req.input = value;
  next();
}

module.exports = validator;
