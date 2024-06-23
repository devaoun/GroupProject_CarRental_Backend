const nodemailer = require("nodemailer");

const getEmailTemplate = require("./email-template");

const sendDetailedEmail = async (
  to,
  customerName,
  bookingId,
  carDetails,
  startDate,
  endDate,
  pickDropTime,
  pickupLocation,
  dropOffLocation,
  totalAmount
) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAILSENDER,
      pass: process.env.MAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: process.env.MAILSENDER,
    to: to,
    subject: "การยืนยันการชำระค่าเช่ารถ",
    html: getEmailTemplate(
      customerName,
      bookingId,
      carDetails,
      startDate,
      endDate,
      pickDropTime,
      pickupLocation,
      dropOffLocation,
      totalAmount
    ),
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendDetailedEmail;
