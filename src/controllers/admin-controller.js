const adminService = require("../services/admin-service")
const hashService = require("../services/hash-service")
const jwtService = require("../services/jwt-service")
const createError = require("../utils/createError")


const adminController = {}

adminController.register = async (req, res, next) => {
    try {
        const data = req.input
        console.log(req.input)
        const existUser = await adminService.findAdminByUsername(data.username)

        if (existUser) {
            createError({
                message: 'username already registered',
                statusCode: 400,
                field: 'username'
            })
        }

        data.password = await hashService.hash(data.password);

        await adminService.createAdmin(data);

        res.status(201).json({ message: 'admin register success' })
    } catch (error) {
        next(error)
    }
}

adminController.login = async (req, res, next) => {
    try {
        const data = req.input
        const existUser = await adminService.findAdminByUsername(data.username)

        if (!existUser) {
            createError({
                message: 'Invalid credentials',
                statusCode: 400
            })
        }

        const isMatch = await hashService.compare(data.password, existUser.password);

        if (!isMatch) {
            createError({
                message: "Invalid credentials",
                statusCode: 400
            })
        }
        
        const adminToken = jwtService.sign({ id: existUser.id });

        res.status(200).json({ adminToken })
    } catch (error) {
        next(error)
    }
}

module.exports = adminController