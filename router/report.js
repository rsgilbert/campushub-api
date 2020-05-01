const express = require('express')
const router = express.Router()

const Report = require('../models/report')

router.get('/reports', async (req, res) => {
    const reports = await Report.find({})
    return res.json(reports)
})

router.post('/reports', async (req, res) => {
    const report = await Report.create(req.body)
    console.log(report)
    return res.json(report)
})

module.exports = router