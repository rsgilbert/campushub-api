const express = require('express')
const router = express.Router()
const multer = require('multer')
const AWS = require('aws-sdk')
require('dotenv').config()
const fs = require('fs')

const Picture = require('../models/picture')
const uploadMiddleware = multer({ dest: 'uploads/' })

const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID 
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY 
const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME

const s3 = new AWS.S3({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
})

router.get('/pictures', async (req, res) => {
    const pictures = await Picture.find({})
    // console.log(pictures)
    return res.json(pictures)
})

router.post('/pictures', uploadMiddleware.single('picture_image'), async (req, res) => {
    const tmpPath = req.file.path
    const itemId = req.file.originalname
    // const picture = await Picture.create(req.body)
    // console.log(picture)
    // return res.json(picture)
    const readStream = fs.createReadStream(tmpPath)
    const params = {
        Bucket: S3_BUCKET_NAME,
        Key: tmpPath,
        Body: readStream
    }
    const result = await s3.upload(params).promise()
    const pictureUrl = result.Location
    // const pictureUrl = `http://10.0.2.2:5000/${req.file.filename}`
    const picture = await Picture.create({ itemId, pictureUrl })
    console.log(picture)
    return res.json(picture)
})

router.delete('/pictures/:id', async (req, res) => {
    const picture = await Picture.findByIdAndDelete(req.params.id)
    return res.json(picture)

})

module.exports = router