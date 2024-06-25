const bookingService = require("../services/booking-service");
const carsService = require("../services/cars-service");
const calculateTotalAmount = require("../utils/calculateTotalAmount");

const bookingController = {};

bookingController.bookCar = async (req, res, next) => {
  try {
    const carDetail = await carsService.findCarByCarId(+req.body.carId);

    const amount = calculateTotalAmount(
      req.body.startDate,
      req.body.endDate,
      carDetail.CarModel.CarType.pricePerDay
    );

    const data = {
      customerId: req.user.customerId,
      carId: +req.body.carId,
      startDate: new Date(req.body.startDate),
      endDate: new Date(req.body.endDate),
      pickDropTime: req.body.pickDropTime,
      totalAmount: amount,
      pickupLocationId: +req.body.pickupLocationId,
      dropoffLocationId: +req.body.dropoffLocationId,
    };

    const result = await bookingService.createBooking(data);
    req.booking = {
      bookingId: result.bookingId,
      totalAmount: result.totalAmount,
    };

    next();
  } catch (error) {
    next(error);
  }
};
module.exports = bookingController;
