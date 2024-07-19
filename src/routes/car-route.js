const express = require('express')
const carController = require('../controllers/car-controller')

const carRouter = express.Router()

carRouter.get('/status/:carStatus',carController.getCarByStatus)


module.exports = carRouter