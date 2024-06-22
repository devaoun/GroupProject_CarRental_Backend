const prisma = require("../model/prisma")


const carTypeService = {}

carTypeService.getAllCarType = () => prisma.carTypes.findMany()

module.exports = carTypeService