const express = require('express')
const router = express.Router()

const Item = require('../models/item')

router.get('/items', async (req, res) => {
    const items = await Item.find({})
    console.log(items)
    return res.json(items)
})



router.post('/items', async (req, res) => {
    const item = await Item.create(req.body)
    console.log(item)
    return res.json(item)
})

router.put('/items/:_id', async (req, res) => {
    const _id = req.params._id
    const name = req.body.name
    const price = parseInt(req.body.price)
    const update = { name, price }
    console.log(update)
    const doc = await Item.findByIdAndUpdate(_id, update, { new: true })
    console.log(doc)
    return res.json(doc)
})

router.put('/items/:_id/displayPicture', async (req, res) => {
    const _id = req.params._id
    const displayPicture = req.body.displayPicture
    const doc = await Item.findByIdAndUpdate(_id, { displayPicture }, { new: true })
    console.log(doc)
    return res.json(doc)
})

router.delete('/items/:_id', async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params._id)
    console.log(item)
    return res.json(item)
})

module.exports = router