const branchesService = require("../services/branches-service")
const carModelsService = require("../services/carModels-service")
const carsService = require("../services/cars-service")


const adminCarController = {}

adminCarController.findCarByStatus = async(req,res,next) => {
    try {
        const status = req.params.carStatus
        const data = await carsService.findCarByStatus(status)
        res.status(200).json({message : data})
    } catch (error) {
        next(error)
    }
}

adminCarController.createCarModel = async(req,res,next) => {
    try {
        const data = req.input
        const result = await carModelsService.createCarModels(data)
        console.log(result)
        res.status(201).json({message : 'car model create success'})
    } catch (error) {
        next(error)
    }
}

adminCarController.createCar = async(req,res,next) => {
    try {
        const data = req.input
        const result = await carsService.createCar(data)
        console.log(result)
        res.status(201).json({message : 'car create success'})
    } catch (error) {
        next(error)
    }
}

adminCarController.updateCar = async(req,res,next) => {
    try {
        const data = req.body
        const carId = +req.params.carId
        const result = await carsService.updateCar(carId,data)
        console.log(result)
        res.status(201).json({message : 'car update success'})
    } catch (error) {
        next(error)
    }
}

adminCarController.getAllCar = async(req,res,next) => {
    try {
        const data = await carsService.getAllCar()
        res.status(200).json({message : data})
    } catch (error) {
        next(error)
    }
}

adminCarController.getAllCarModel = async(req,res,next) => {
    try {
        const data = await carModelsService.getAllCarModels()
        res.status(200).json({message : data})
    } catch (error) {
        next(error)
    }
}

adminCarController.getAllBranch = async(req,res,next) => {
    try {
        const data = await branchesService.getAllBranches()
        res.status(200).json({message : data})
    } catch (error) {
        next(error)
    }
}

module.exports = adminCarController