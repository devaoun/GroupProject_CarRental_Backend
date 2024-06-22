const customerService = require("../services/customer-service");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");

const createError = require("../utils/createError");

const authController = {};

authController.register = async (req, res, next) => {
  try {
    const data = req.input;

    const existUser = await customerService.findCustomerByEmail(data.email);

    if (existUser) {
      createError({
        message: "email already registered",
        statusCode: 400,
        field: "email",
      });
    }

    data.password = await hashService.hash(data.password);

    await customerService.createCustomer(data);

    res.status(201).json({ message: data });
  } catch (error) {
    next(error);
  }
};

authController.login = async (req, res, next) => {
  try {
    const data = req.input;

    const existUser = await customerService.findCustomerByEmail(data.email);
    if (!existUser) {
      createError({
        message: "Invalid credentials",
        statusCode: 400,
      });
    }

    const isMatch = await hashService.compare(
      data.password,
      existUser.password
    );

    if (!isMatch) {
      createError({
        message: "Invalid credentials",
        statusCode: 400,
      });
    }

    const accessToken = jwtService.sign({ id: existUser.id });

    res.status(200).json({ accessToken });
  } catch (error) {
    next(error);
  }
};

module.exports = authController;
