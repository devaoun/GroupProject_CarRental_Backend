const express = require('express')
const carTypesController = require('../controllers/carType-controller')

const carTypeRouter = express.Router()

carTypeRouter.get('/',carTypesController.getAllCarType)

module.exports = carTypeRouter