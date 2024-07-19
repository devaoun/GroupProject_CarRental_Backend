const bookingService = require("../services/booking-service")
const carsService = require("../services/cars-service")
const paymentService = require("../services/payment-service")


const adminBookingController = {}

adminBookingController.getAllBooking = async (req, res, next) => {
    try {
        const bookings = await bookingService.getAllBooking()
        res.status(200).json({ message: bookings })
    } catch (error) {
        next(error)
    }
}

adminBookingController.getBookingByPage = async (req, res, next) => {
    try {
        const currentPage = +req.params.currentPage
        const cardPerPage = +req.query.cardPerPage
        const countBookings = await bookingService.getAllBookingCount()
        const bookings = await bookingService.getBookingByPage(currentPage, cardPerPage)
        res.status(200).json({ bookings, countBookings })
    } catch (error) {
        next(error)
    }
}

adminBookingController.updateBookingStatus = async (req, res, next) => {
    try {
        const bookingId = +req.params.bookingId
        const { status } = req.body
        if (status === 'cancelled') {
            const deleteResult = await paymentService.deletePaymentByBookingId(bookingId)
            console.log(deleteResult)
        }
        const updateBookingResult = await bookingService.updateBookingStatus(bookingId, status)
        if (updateBookingResult.status === 'cancelled') {
            const updateCarResult = await carsService.updateCar(updateBookingResult.carId, { status: 'available' })
            console.log(updateCarResult)
        }
        res.status(200).json({ message: `BookingID : ${bookingId} status updated` })
    } catch (error) {
        next(error)
    }
}

adminBookingController.getAllBookingCount = async (req, res, next) => {
    try {
        const allBookingsCount = await bookingService.getAllBookingCount()
        res.status(200).json(allBookingsCount)
    } catch (error) {
        next(error)
    }
}

module.exports = adminBookingController