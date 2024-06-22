const express = require("express");
require("dotenv").config();
const cors = require("cors");
const errorMiddleware = require("./middlewares/error-middleware");
const notFoundMiddleware = require("./middlewares/notFound-middleware");
const authRouter = require("./routes/auth-route");
const limiter = require("./middlewares/rate-limit");
const branchesRouter = require("./routes/branches-route");
const carsRouter = require("./routes/cars-route");
const customerRouter = require("./routes/customer-route");
const { authenticate } = require("./middlewares/authenticate");
const paymentRouter = require("./routes/payment-route");
const app = express();

app.use(cors());
app.use("/payment", paymentRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use("/auth", authRouter);
app.use("/branches", branchesRouter);
app.use("/cars", carsRouter);
app.use("/customer", authenticate, customerRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`This server is running on port: ${PORT}`));
