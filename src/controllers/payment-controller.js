const bookingService = require("../services/booking-service");
const customerService = require("../services/customer-service");
const paymentService = require("../services/payment-service");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET;
const { v4: uuidv4 } = require("uuid");
const sendDetailedEmail = require("../utils/email-notification");
const carsService = require("../services/cars-service");
const branchesService = require("../services/branches-service");

const paymentController = {};

paymentController.webhook = async (request, response) => {
  const sig = request.headers["stripe-signature"];
  const payload = request.body;

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }
  // Handle the checkout.session.completed event
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      console.log(session);

      // update status กลับเข้าไปใน database หลังจากลูกค้าจ่ายแล้ว
      const sessionId = session.id;
      const paymentStatus = session.status;

      await paymentService.updatePaymentStatus(sessionId, paymentStatus);

      // add reward points

      // find payment detail for bookingId and amount
      const paymentDetail = await paymentService.findPaymentBySessionId(
        sessionId
      ); // find Booking detail for customerId

      const bookingDetail = await bookingService.findBookingByBookingId(
        paymentDetail.bookingId
      );

      const customerId = bookingDetail.customerId;
      const totalAmount = paymentDetail.amount;
      const rewardPoints = Math.floor(totalAmount / 100);

      await customerService.addRewardPoints(customerId, rewardPoints);
      // find car detail from car id
      const carDetail = await carsService.findCarByCarId(bookingDetail.carId);
      // find customer detail from customer id
      const customerDetail = await customerService.findCustomerById(customerId);
      // pickup and dropOff Location from booking id
      const pickupLocation = await branchesService.findLocation(
        bookingDetail.pickupLocationId
      );
      const dropOffLocation = await branchesService.findLocation(
        bookingDetail.dropoffLocationId
      );

      // Email notification

      await sendDetailedEmail(
        customerDetail.email,
        `${customerDetail.firstName} ${customerDetail.lastName}`,
        bookingDetail.bookingId,
        `${carDetail.CarModel.brand} ${carDetail.CarModel.model}`,
        `${bookingDetail.startDate}`,
        `${bookingDetail.endDate}`,
        bookingDetail.pickDropTime,
        pickupLocation.branchName,
        dropOffLocation.branchName,
        totalAmount
      );

      break;
    }
  }

  /// อาจจะใช้ nodemailer ในการส่ง emailตรงนี้
  response.status(200).end();
};

paymentController.createCheckoutSession = async (req, res, next) => {
  const { totalAmount } = req.body; // มาจาก Booking id

  try {
    const orderId = uuidv4();
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "promptpay"],
      customer_email: req.user.email,
      line_items: [
        {
          price_data: {
            currency: "thb",
            product_data: {
              name: "Car Rental Service",
            },
            unit_amount: Number(totalAmount) * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `http://localhost:8888/success.html?id=${orderId}`,
      cancel_url: `http://localhost:8888/cancel.html`,
    });

    const orderData = {
      bookingId: +req.body.bookingId,
      amount: +totalAmount,
      orderId: orderId,
      paymentStatus: session.status,
      sessionId: session.id,
      paymentDate: new Date(), // กำหนดค่า paymentDate เป็นวันที่ปัจจุบัน
    };

    const result = await paymentService.saveOrderDataForPayment(orderData);

    res.status(200).json({ payment: result, url: session.url });
  } catch (error) {
    next(error);
  }
};

module.exports = paymentController;
