require('dotenv').config()
const jwt = require('jsonwebtoken')
const {SECRET} = process.env

module.exports = {
    
    isAuthenticated: (req, res, next) => {
        const headerToken = req.get('Authorization')

        if (!headerToken) {
            console.log(`Error in Auth middleware`)
            res.sendStatus(401)
        }

        let token

        try {
            token = jwt.verify(headerToken, SECRET)

        } catch(error) {
            err.statusCode = 500
            throw error
        }
        if(!token) {
            const error = new Error("Not Authenticated")
            error.statusCode = 401
            throw error
        }
        next()
    }
}