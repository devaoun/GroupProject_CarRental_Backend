const bookingService = require("../services/booking-service");
const customerService = require("../services/customer-service");
const hashService = require("../services/hash-service");
const createError = require("../utils/createError");

const customerController = {};

customerController.getInfo = (req, res, next) => {
  try {
    const data = req.user;
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

customerController.updateInfo = async (req, res, next) => {
  const data = req.input;

  try {
    const existUser = await customerService.findCustomerByEmail(req.user.email);

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
        message: "invalid credentials",
        statusCode: 400,
        field: "password",
      });
    }

    delete data.password; // must be deleted; otherwise, password will be changed

    await customerService.updateCustomerInfo(req.user.id, data);

    res.status(200).json({ message: "information updated" });
  } catch (error) {
    next(error);
  }
};

customerController.getMyBooking = async (req, res, next) => {
  try {
    const myBooking = await bookingService.findBookingByCustomerId(
      +req.user.customerId
    );
    res.status(200).json(myBooking);
  } catch (error) {
    next(error);
  }
};


module.exports = customerController;
