const customerService = require("../services/customer-service");
const jwtService = require("../services/jwt-service");
const createError = require("../utils/createError");

exports.authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer ")) {
      createError({
        message: "unauthenticated",
        statusCode: 401,
      });
    }

    const accessToken = authorization.split(" ")[1];

    const payload = jwtService.verify(accessToken);

    const user = await customerService.findCustomerById(payload.id);

    if (!user) {
      createError({
        message: "User was not found",
        statusCode: 400,
      });
    }

    delete user.password;
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
