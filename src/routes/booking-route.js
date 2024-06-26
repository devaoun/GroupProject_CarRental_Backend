const express = require("express");
const bookingController = require("../controllers/booking-controller");
const bookingRouter = express.Router();

bookingRouter.get("/", bookingController.bookCar);

module.exports = bookingRouter;
