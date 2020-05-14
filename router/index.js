const express = require('express')
const router = express.Router()
const register = require('./register')
const login = require('./login')
const fs = require('fs')
const path = require('path')
const item = require('./item')
const order = require('./order')
const picture = require('./picture')


router.get('/test', (_, res) => {
    return res.json("Test Successful")
})

router.use(register)
router.use(login)
router.use(item)
router.use(order)
router.use(picture)
router.use(login)

module.exports = router

// router.get('/direction', (req, res) => {
//     const p = path.join(__dirname, 'api-directions-response.json')
//     const json = JSON.parse(fs.readFileSync(p).toString())
//     res.json(json)
// })
