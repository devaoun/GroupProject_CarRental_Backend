const customerService = require("../services/customer-service")


const adminCustomerController = {}

adminCustomerController.getAllCustomer = async(req,res,next) => {
    try {
        const data = await customerService.getAllCustomer()
        res.status(200).json({message : data})
    } catch (error) {
        next(error)
    }
}

module.exports = adminCustomerController