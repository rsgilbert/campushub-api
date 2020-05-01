const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const saltRounds = 10
require('dotenv').config()


const status = {
    CONFLICT: 409,
    SERVER_ERROR: 500,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
}

const hashPassword = async password => {
    return await bcrypt.hash(password, saltRounds)
}


module.exports = {
    status, hashPassword
}