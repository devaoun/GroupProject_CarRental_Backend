const {rateLimit} = require('express-rate-limit');

const limiter = rateLimit({
    windowMs : 1 * 60 * 1000,
    limit: 1000,
    message: {message: 'From limiter too many request in a given period'}
})

module.exports = limiter