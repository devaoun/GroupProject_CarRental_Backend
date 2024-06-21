

const authController = {}

authController.register = async(req , res , next) => {
    try {
        res.json({message : 'hello register'})
    } catch (error) {
        next(error)
    }
}

module.exports = authController