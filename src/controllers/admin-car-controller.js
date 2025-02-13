const branchesService = require("../services/branches-service")
const carModelsService = require("../services/carModels-service")
const carsService = require("../services/cars-service")
const createError = require("../utils/createError")


const adminCarController = {}

adminCarController.findCarByStatus = async (req, res, next) => {
    try {
        const status = req.params.carStatus
        const data = await carsService.findCarByStatus(status)
        res.status(200).json({ message: data })
    } catch (error) {
        next(error)
    }
}

adminCarController.createCarModel = async (req, res, next) => {
    try {
        const data = req.input
        const result = await carModelsService.createCarModels(data)
        console.log(result)
        res.status(201).json({ message: 'car model create success' })
    } catch (error) {
        next(error)
    }
}

adminCarController.createCar = async (req, res, next) => {
    try {
        const data = req.input
        const result = await carsService.createCar(data)
        console.log(result)
        res.status(201).json({ message: 'car create success' })
    } catch (error) {
        next(error)
    }
}

adminCarController.updateCar = async (req, res, next) => {
    try {
        const data = req.body
        const carId = +req.params.carId
        const { Bookings } = await carsService.findCarByCarId(carId)
        const currentDate = new Date()
        const isRenting = Bookings.map(item => {
            if (item.status === 'confirmed') {
                if (currentDate >= item.startDate && currentDate <= item.endDate) {
                    return true
                }
            }
        })
        const findRenting = (isRenting.filter(item => item === true))
        if (findRenting.length > 0) {
            createError({
                message: 'This car is being rented during selected period.',
                statusCode: 400
            })
        }
        const result = await carsService.updateCar(carId, data)
        console.log(result)
        res.status(201).json({ message: 'car update success' })
    } catch (error) {
        next(error)
    }
}

adminCarController.getAllCar = async (req, res, next) => {
    try {
        const data = await carsService.getAllCar()
        res.status(200).json({ message: data })
    } catch (error) {
        next(error)
    }
}

adminCarController.getAllCarModel = async (req, res, next) => {
    try {
        const data = await carModelsService.getAllCarModels()
        res.status(200).json({ message: data })
    } catch (error) {
        next(error)
    }
}

adminCarController.getAllBranch = async (req, res, next) => {
    try {
        const data = await branchesService.getAllBranches()
        res.status(200).json({ message: data })
    } catch (error) {
        next(error)
    }
}

adminCarController.deleteCar = async (req, res, next) => {
    try {
        const carId = +req.params.carId
        const { status } = await carsService.findCarByCarId(carId)
        console.log(status)
        if (status === 'rented') {
            createError({
                message: `This car id : ${carId} is rented can't remove`,
                statusCode: 400
            })
        }
        await carsService.deleteCar(carId)
        res.status(200).json({ message: `Deleted car id ${carId}` })
    } catch (error) {
        next(error)
    }
}

adminCarController.getCarCountByStatus = async(req,res,next) => {
    try {
        const carStatus = req.params.carStatus 
        const result = await carsService.getCarCountByStatus(carStatus)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
}

module.exports = adminCarController