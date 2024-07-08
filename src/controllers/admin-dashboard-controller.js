const bookingService = require("../services/booking-service")
const carModelsService = require("../services/carModels-service")
const carsService = require("../services/cars-service")
const customerService = require("../services/customer-service")
const paymentService = require("../services/payment-service")

const adminDashboardController = {}

adminDashboardController.getAllDataInDashboard = async (req, res, next) => {
    try {
        //{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ SUMMARY REPORT DATA }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
        const carCountRes = await carsService.getCarCountByStatus('available')
        const currentMonthPaymentCountRes = await paymentService.getCurrentMonthPaymentCount()
        const currentMonthBookingCountRes = await bookingService.getCurrentMonthBookingCount()
        const allCustomerCountRes = await customerService.getAllCustomerCount()
        const summaryReportCard = {
            countCarAvailable: carCountRes,
            countCurrentMonthPayment: currentMonthPaymentCountRes,
            countCurrentMonthBooking: currentMonthBookingCountRes,
            allCustomerCount: allCustomerCountRes,
        }
        //{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ YEARLY SALES DATA }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
        const yearlySaleRes = await paymentService.getCurrentYearPayment()
        const getMonthName = (dateString) => {
            const date = new Date(dateString);
            const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return monthNames[date.getMonth()];
        };
        // ฟังก์ชันเพื่อสร้างรายชื่อเดือนทั้งหมด
        const getAllMonths = () => {
            return ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        };
        // ฟังก์ชันเพื่อคำนวณยอดรวมของแต่ละเดือน
        const calculateMonthlyTotals = (data) => {
            const monthlyTotals = data.reduce((acc, item) => {
                const month = getMonthName(item.paymentDate);
                if (!acc[month]) {
                    acc[month] = 0;
                }
                acc[month] += item.amount;
                return acc;
            }, {});

            const allMonths = getAllMonths();
            return allMonths.map(month => ({
                month: month.toLowerCase(),
                totalAmount: monthlyTotals[month] || 0
            }));
        };
        const yearlySale = calculateMonthlyTotals(yearlySaleRes);
        //{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ YEARLY POPULAR CAR DATA }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
        const yearlyPopularCarRes = await bookingService.getYearlyBookingStatusConfirmed()
        const countCarModels = (data) => {
            // ใช้ map เพื่อสร้างคีย์ที่ไม่ซ้ำกัน และนับจำนวน
            const counts = data.reduce((acc, item) => {
                // สร้างคีย์ที่เป็นข้อความจากแบรนด์, โมเดล, และสี
                const carDescription = `${item.Car.CarModel.brand} ${item.Car.CarModel.model} ${item.Car.CarModel.color}`;
                // ถ้าคีย์มีอยู่แล้วใน accumulator, เพิ่มจำนวน
                if (acc[carDescription]) {
                    acc[carDescription]++;
                } else {
                    // ถ้ายังไม่มีคีย์นี้, ตั้งค่าจำนวนเริ่มต้นเป็น 1
                    acc[carDescription] = 1;
                }
                return acc;
            }, {});
            // แปลงผลลัพธ์เป็นอาร์เรย์ของอ็อบเจกต์
            return Object.keys(counts).map(car => ({
                car: car,
                count: counts[car]
            }));
        };
        const yearlyPopularCar = countCarModels(yearlyPopularCarRes);
        //{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{ ALL CAR MODEL DATA }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
        const allCarModelRes = await carModelsService.getAllCarModels()
        const transformCarData = (data) => {
            return data.map(car => ({
                car: `${car.brand} ${car.model} (${car.color})`,
                image: car.CarImages[0].imageUrl
            }));
        };
        const allCarModel = transformCarData(allCarModelRes);
        ////////////////// Response ///////////////////////
        // res.status(200).json(allCarModelRes)
        res.status(200).json({
            summaryReportCard,
            yearlyPopularCar,
            yearlySale,
            allCarModel
        })
    } catch (error) {
        next(error)
    }
}

module.exports = adminDashboardController