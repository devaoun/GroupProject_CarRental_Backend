const dayjs = require("dayjs");

function getEmailTemplate(
  customerName,
  bookingId,
  carDetails,
  startDate,
  endDate,
  pickDropTime,
  pickupLocation,
  dropOffLocation,
  totalAmount
) {
  const formattedStartDate = dayjs(startDate).format("ddd MMM D, YYYY");
  const formattedEndDate = dayjs(endDate).format("ddd MMM D, YYYY");

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          @import url('https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css');
        </style>
      </head>
      <body class="bg-gray-100 font-sans leading-normal tracking-normal">
        <div class="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h2 class="text-3xl font-bold mb-6 text-center text-indigo-600">Rental Payment Confirmation</h2>
          <p class="mb-4 text-lg">Dear ${customerName},</p>
          <p class="mb-4 text-lg">Thank you for choosing our car rental service! Your payment has been confirmed. Here are the details of your rental:</p>
          
          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 class="text-xl font-semibold mb-2">Booking ID: ${bookingId}</h3>
            <p class="mb-2"><span class="font-semibold">Car Details:</span> ${carDetails}</p>
            <p class="mb-2"><span class="font-semibold">Rental Period:</span> From ${formattedStartDate} at ${pickDropTime} to ${formattedEndDate} at ${pickDropTime}</p>
            <p class="mb-2"><span class="font-semibold">Total Amount Paid:</span> ${totalAmount} THB</p>
          </div>

          <div class="mb-6 p-4 bg-gray-50 rounded-lg">
            <p class="mb-2"><span class="font-semibold">Pickup Location:</span> ${pickupLocation}</p>
            <p class="mb-2"><span class="font-semibold">Dropoff Location:</span> ${dropOffLocation}</p>
          </div>

          <p class="mb-4 text-lg">Your car will be ready for pickup on the dates specified in your rental details. If you have any questions or concerns, please contact us at <a href="tel:[Phone Number]" class="text-indigo-600">[Phone Number]</a> or <a href="mailto:[Support Email]" class="text-indigo-600">[Support Email]</a>.</p>

          <p class="mb-4 text-lg">Best regards,</p>
          <p class="text-lg font-bold">Stella Car Rental</p>
        </div>
      </body>
    </html>
  `;
}

module.exports = getEmailTemplate;
