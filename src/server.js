const express = require('express')
require('dotenv').config()
const cors = require('cors')
const errorMiddleware = require('./middlewares/error-middleware')
const notFoundMiddleware = require('./middlewares/notFound-middleware')
const app = express()

app.use(cors())
app.use(express.json())



app,use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 8000
app.listen(port , console.log('car rental server running :' , port))