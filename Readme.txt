========== .env file ==========

PORT=8888

DATABASE_URL="mysql://avnadmin:AVNS_Mp-kz4u5_DM1rjBg2sl@mysql-23818dbc-narong-125f.d.aivencloud.com:13411/stella_car_rental_project"

JWT_SECRET=HELLOHACKERS

CLOUDINARY_NAME=ds0ybfxj8
CLOUDINARY_API_KEY=472629573342423
CLOUDINARY_API_SECRET=IvReuEmMRvfdE_NowNxDPLwD634


STRIPE_SECRET_KEY=sk_test_51PRSAsC6Bw2G4bOHJYVCWrrLcGpBOhOFzPwXGQgiAgRQbv3GtA2F99D8y9XAoKSo1ttvumPUbhKFEQV1h40YfbvH00mrSCRSkc

STRIPE_ENDPOINT_SECRET=whsec_94bfd68df74de8cbcbbd291c39bed83382e1197d0b2cba3b47b63fcc1e1a1f7a



===============================

************************************************* CUSTOMER FEATURE *************************************************



*************************************************** ADMIN FEATURE ***************************************************
--- REGISTER
POST /admin/auth/register
BODY
    username
    password
    confirmPassword
RESPONSE
    201 message : "admin register success"
    400 message
    500 message

--- LOGIN
POST /admin/auth/login
BODY
    username
    password
RESPONSE
    200 message : "adminToken"
    400 message
    500 message


    




