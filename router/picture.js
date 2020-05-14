const express = require('express')
const router = express.Router()
const multer = require('multer')



const Picture = require('../models/picture')

const uploadMiddleware = multer({ dest: 'uploads/' })

router.get('/pictures', async (req, res) => {
    const pictures = await Picture.find({})
    // console.log(pictures)
    return res.json(pictures)
})

router.post('/pictures', uploadMiddleware.single('picture_image'), async (req, res) => {
    console.log(req.file)
    const itemId = req.file.originalname
    const pictureUrl = `http://10.0.2.2:5000/${req.file.filename}`
    const picture = await Picture.create({ itemId, pictureUrl })
    console.log(picture)
    // const tmpPath = req.file.path

    // dev, serving using express
    // console.log(tmpPath)

    // const srcFile = fs.createReadStream(tmpPath)
    // console.log(srcFile)
    // const picture = await Picture.create(req.body)
    // console.log(picture)
    // return res.json(picture)
    return res.json(picture)
})

router.delete('/pictures/:id', async (req, res) => {
    const picture = await Picture.findByIdAndDelete(req.params.id)
    return res.json(picture)

})

module.exports = router