========== .env file ==========

PORT=8888

DATABASE_URL="mysql://avnadmin:AVNS_Mp-kz4u5_DM1rjBg2sl@mysql-23818dbc-narong-125f.d.aivencloud.com:13411/stella_car_rental_project"

JWT_SECRET=HELLOHACKERS

CLOUDINARY_NAME=ds0ybfxj8
CLOUDINARY_API_KEY=472629573342423
CLOUDINARY_API_SECRET=IvReuEmMRvfdE_NowNxDPLwD634



===============================

************************************************* CUSTOMER FEATURE *************************************************



*************************************************** ADMIN FEATURE ***************************************************
--- REGISTER
POST /admin/auth/register
BODY
    username
    password
RESPONSE
    200 message : "admin register success"
    400 message
    500 message




