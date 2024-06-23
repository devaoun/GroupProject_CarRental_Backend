const adminService = require("../services/admin-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/createError");


exports.adminAuthenticate = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization || !authorization.startsWith("Bearer ")) {
            createError({
                message: 'adminUnauthenticated',
                statusCode: 401,
            })
        }

        const adminToken = authorization.split(" ")[1]
        const payload = jwtService.verify(adminToken);
        const admin = await adminService.findAdminById(payload.id)

        if (!admin) {
            createError({
                message: "Admin was not found",
                statusCode: 400,
            });
        }

        delete admin.password;
        req.admin = admin;
        next()

    } catch (error) {
        next(error)
    }
}
