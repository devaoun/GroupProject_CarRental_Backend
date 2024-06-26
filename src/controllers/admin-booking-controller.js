const bookingService = require("../services/booking-service")


const adminBookingController = {}

adminBookingController.getAllBooking = async(req,res,next) => {
    try {
        const bookings = await bookingService.getAllBooking()
        res.status(200).json({message : bookings})
    } catch (error) {
        next(error)
    }
}

adminBookingController.updateBookingStatus = async(req,res,next) => {
    try {
        const bookingId = +req.params.bookingId
        const {status} = req.body
        const result = await bookingService.updateBookingStatus(bookingId,status)
        console.log(result)
        res.status(200).json({message : `BookingID : ${bookingId} status updated`})
    } catch (error) {
        next(error)
    }
}

module.exports = adminBookingController