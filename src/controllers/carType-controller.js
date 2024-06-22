const carTypeService = require("../services/carType-service")


const carTypesController = {}

carTypesController.getAllCarType = async(req,res,next) => {
    try {
        const data = await carTypeService.getAllCarType()
        res.status(200).json({carTypes : data})
    } catch (error) {
        next(error)
    }
}

module.exports = carTypesController