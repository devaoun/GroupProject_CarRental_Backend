const prisma = require("../model/prisma")


const carService = {}

carService.getCarByStatus = (status) => prisma.cars.findMany({
    where : {status : status}
})

module.exports = carService