const createError = require("../utils/createError");

const {
  registerSchema,
  loginSchema,
  infoSchema,
  adminRegisterSchema,
  adminLoginSchema,
} = require("../validator/auth-validator");
const { carModelsSchema, carsSchema } = require("../validator/cars-validator");

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


validator.updateCustomer = (req, res, next) => {
  const { value, error } = infoSchema.validate(req.body);
  if (error) {
    createError({
      message: error.details[0].message,
      statusCode: 400,
    });
  }
  req.input = value;
  next();
}


//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ ADMIN ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
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
};

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

validator.adminCreateCarModels = (req,res,next) => {
  const {value , error} = carModelsSchema.validate(req.body);
  if(error){
    createError({
      message : error.details[0].message,
      statusCode : 400
    })
  }
  req.input = value;
  next();
}

validator.adminCreateCar = (req,res,next) => {
  const {value , error} = carsSchema.validate(req.body);
  if(error){
    createError({
      message : error.details[0].message,
      statusCode : 400
    })
  }
  req.input = value;
  next();
}


module.exports = validator;
