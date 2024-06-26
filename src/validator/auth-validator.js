const Joi = require("joi");

exports.registerSchema = Joi.object({
  firstName: Joi.string().required().trim(),
  lastName: Joi.string().required().trim(),

  email: Joi.string().email({ tlds: false }).required(),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  address: Joi.string().required(),
  driverLicense: Joi.string().required(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip(),
});

exports.loginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});


exports.infoSchema = Joi.object({
  firstName: Joi.string(),
  lastName: Joi.string(),
  phone: Joi.string().pattern(/^[0-9]{10}$/),
  address: Joi.string(),
  driverLicense: Joi.string(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip(),
});

//[[[[[[[[[[[[[[[[[[[[[[[ ADMIN ]]]]]]]]]]]]]]]]]]]]]]]

exports.adminRegisterSchema = Joi.object({
  username: Joi.string().required().trim(),
  password: Joi.string()
    .required()
    .pattern(/^[a-zA-Z0-9]{6,}$/),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).strip()
})

exports.adminLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
})


