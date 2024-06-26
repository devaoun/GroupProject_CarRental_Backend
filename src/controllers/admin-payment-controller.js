const paymentService = require("../services/payment-service")


const adminPaymentController = {}

adminPaymentController.getAllPayment = async(req,res,next) => {
    try {
        const data = await paymentService.getAllPayment()
        res.status(200).json({message : data})
    } catch (error) {
        next(error)
    }
}

module.exports = adminPaymentController