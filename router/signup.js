const express = require('express')
const router = express.Router()
const User = require('../models/user')

const { hashPassword, status } = require('./utils')

router.post('/signup', async (req, res) => {
    const { email } = req.body
    let user = await User.findOne({ email })
    if(user) {
        return res.status(status.CONFLICT).end()
    }
    else {
        user = req.body
        user.hashedPassword = await hashPassword(user.password)
        const newUser = await User.create(req.body)
        console.log(newUser)
        return res.json(newUser)
    } 
})

module.exports = router

