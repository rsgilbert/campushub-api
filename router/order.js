const express = require('express')
const router = express.Router()

const Order = require('../models/order')

router.get('/orders', async (req, res) => {
    const orders = await Order.find({})
    return res.json(orders)
})

router.post('/orders', async (req, res) => {
    const order = await Order.create(req.body)
    console.log(order)
    return res.json(order)
})

module.exports = router