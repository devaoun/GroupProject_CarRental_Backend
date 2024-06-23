const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const paymentController = require("../controllers/payment-controller");
const { authenticate } = require("../middlewares/authenticate");
const paymentRouter = express.Router();

paymentRouter.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  paymentController.webhook
);

paymentRouter.use(express.json());
paymentRouter.use(express.urlencoded({ extended: true }));

paymentRouter.post(
  "/create-checkout-session",
  authenticate,
  paymentController.createCheckoutSession
);

module.exports = paymentRouter;
