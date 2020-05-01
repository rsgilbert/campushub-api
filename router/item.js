const express = require('express')
const router = express.Router()

const Item = require('../models/item')

router.get('/items', async (req, res) => {
    const items = await Item.find({})
    // console.log(items)
    return res.json(items)
})

router.post('/items', async (req, res) => {
    const item = await Item.create(req.body)
    console.log(item)
    return res.json(item)
})

module.exports = router