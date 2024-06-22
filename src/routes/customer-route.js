const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const customerController = require("../controllers/customer-controller");
const validator = require("../middlewares/validator");

const customerRouter = express.Router();

customerRouter.get("/", customerController.getInfo);

customerRouter.patch(
  "/info",
  validator.updateCustomer,
  customerController.updateInfo
);

customerRouter.get("/bookings", customerController.getMyBooking);

module.exports = customerRouter;
