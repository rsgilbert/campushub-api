const express = require('express')
const router = express.Router()
const User = require('../models/user')

const { status } = require('./utils')

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
            if(err) {
                return res.status(status.SERVER_ERROR).end()
            }
            if(isMatch) {
                return res.json(user)
            } 
            return res.status(status.UNAUTHORIZED).end()
        })
    } 
    else return res.status(status.NOT_FOUND).end()
})

module.exports = router

