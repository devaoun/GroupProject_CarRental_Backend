const carService = require("../services/car-service")

const carController = {}

carController.getCarByStatus = async(req,res,next) => {
    try {
        const {carStatus} = req.params.carStatus
        const data = await carService.getCarByStatus(carStatus)
        res.status(200).json({cars : data})
    } catch (error) {
        next(error)
    }
}

module.exports = carController