const express = require("express");
const { authenticate } = require("../middlewares/authenticate");
const customerController = require("../controllers/customer-controller");
const customerRouter = express.Router();

customerRouter.get("/", authenticate, customerController.getInfo);

module.exports = customerRouter;
