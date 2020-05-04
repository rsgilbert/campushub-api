const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')


const Picture = require('../models/picture')

const uploadMiddleware = multer({ dest: 'uploads/' })

router.get('/pictures', async (req, res) => {
    const pictures = await Picture.find({})
    // console.log(pictures)
    return res.json(pictures)
})

router.post('/pictures', uploadMiddleware.single('picture_image'), async (req, res) => {
    console.log(req.file)
    const tmpPath = req.file.path
    const srcFile = fs.createReadStream(tmpPath)
    console.log(srcFile)
    // const picture = await Picture.create(req.body)
    // console.log(picture)
    // return res.json(picture)
    return res.json({})
})

module.exports = router