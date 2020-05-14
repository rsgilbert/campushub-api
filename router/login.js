const express = require('express')
const router = express.Router()
const User = require('../models/user')

const { status, signedToken } = require('./utils')

/**
 * Signing in a user.
 * A user's email is matched with their password in the user collection.
 * The password is checked from the user model. If it is correct, isMatch = true
 */
router.post('/login', async (req, res) => {
    const { email, password } = req.body
    let user = await User.findOne({ email })
    if(user) {
        user.checkPassword(password, (err, isMatch) => {
            if(isMatch) {
                console.log(user)
                return res.json(user)
            } 
        })
    } 
    else return res.json({})
})

module.exports = router

