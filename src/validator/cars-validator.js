const Joi = require('joi')

exports.carModelsSchema = Joi.object({
    carTypeId : Joi.number().required(),
    brand : Joi.string().required(),
    model : Joi.string().required(),
    color : Joi.string().required(),
    transmission : Joi.string().required(),
    fuel : Joi.string().required(),
    seats : Joi.number().required(),
  })

  exports.carsSchema = Joi.object({
    carModelId : Joi.number().required(),
    licensePlate : Joi.string().required(),
    status : Joi.string().required(),
    branchId : Joi.number().required(),
    useDate : Joi.string().required()
  })