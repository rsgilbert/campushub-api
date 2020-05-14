const express = require('express')
const router = express.Router()
const User = require('../models/user')

const { hashPassword, status, signedToken } = require('./utils')

router.post('/register', async (req, res) => {
    const { email, password } = req.body
    const account = { email }
    let user = await User.findOne(account)
    if(!user) {
        account.hashedPassword = await hashPassword(password)
        const newUser = await User.create(account)
        console.log(newUser)
        return res.json(newUser)
    } 
    else return res.json({})
})

module.exports = router

