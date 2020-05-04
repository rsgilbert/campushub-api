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

router.put('/items/:id', async (req, res) => {
    const _id = req.params.id
    const update = req.body
    const doc = await Item.findByIdAndUpdate(_id, update, { new: true })
    // console.log(doc)
    return res.json(doc)
})

router.delete('/items/:id', async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id)
    console.log(item)
    return res.json(item)
})

module.exports = router