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

const tokenPayload = async token => await jwt.verify(token, secret())

const signedToken = (user, exp='30d') => {
    return jwt.sign({ user }, secret(), {
        expiresIn: exp
    })
}

const secret = () =>
`
** KEEP IT SIMPLE **
pKGf1IktVe79WUMDdPxo
jjmydarksecretisyouV
kezUGjZWHLTLXwrNn6mT
ZlKJqRT3DtunngXsAZtt
`;


module.exports = {
    status, hashPassword, signedToken, tokenPayload
}