const express = require('express')
const validator = require('../middlewares/validator')
const adminController = require('../controllers/admin-controller')
const { adminAuthenticate } = require('../middlewares/adminAuthenticate')
const adminCarController = require('../controllers/admin-car-controller')
const adminBookingController = require('../controllers/admin-booking-controller')
const adminPaymentController = require('../controllers/admin-payment-controller')
const adminCustomerController = require('../controllers/admin-customer-controller')

const adminRouter = express.Router()

//AUTH
adminRouter.post('/auth/register', validator.adminRegister, adminController.register)
adminRouter.post('/auth/login', validator.adminLogin, adminController.login)
adminRouter.get('/auth/me',adminAuthenticate,adminController.getAdmin)

//ADMIN AUTHENTICATE ต้องมี adminToken ถึงจะทำข้างล่างได้
adminRouter.use(adminAuthenticate)
//CARS
adminRouter.get('/cars',adminCarController.getAllCar)
adminRouter.get('/cars/status/:carStatus',adminCarController.findCarByStatus)
adminRouter.get('/cars/model',adminCarController.getAllCarModel)
adminRouter.post('/cars',validator.adminCreateCar,adminCarController.createCar)
adminRouter.patch('/cars/carId/:carId',adminCarController.updateCar)
adminRouter.post('/cars/model',validator.adminCreateCarModels,adminCarController.createCarModel)
//BOOKINGS
adminRouter.get('/bookings',adminBookingController.getAllBooking)
adminRouter.patch('/bookings/bookingId/:bookingId',adminBookingController.updateBookingStatus)
//PAYMENTS
adminRouter.get('/payments',adminPaymentController.getAllPayment)
//CUSTOMERS
adminRouter.get('/customers',adminCustomerController.getAllCustomer)
//BRANCHES
adminRouter.get('/branches',adminCarController.getAllBranch)

module.exports = adminRouter