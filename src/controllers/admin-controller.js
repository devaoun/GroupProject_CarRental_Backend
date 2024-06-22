const adminService = require("../services/admin-service")
const hashService = require("../services/hash-service")
const createError = require("../utils/createError")


const adminController = {}

adminController.register = async(req,res,next) => {
    try {
        const data = req.input
        console.log(req.input)
        const existUser = await adminService.findAdminByUsername(data.username)

        if(existUser) {
            createError({
                message : 'username already registered',
                statusCode : 400,
                field: 'username'
            })
        }

        data.password = await hashService.hash(data.password);
        
        await adminService.createAdmin(data);

        res.status(201).json({message : data})
    } catch (error) {
        next(error)
    }
}

module.exports = adminController