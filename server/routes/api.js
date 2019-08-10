const express = require('express')
const router = express.Router()
const model = require('../models/model')

router.get('/transcations', async function (req, res) {
    const data = await model.find({}).select({ "amount": 1, "vendor": 1, "category":1, "_id": 0})
    console.log(data)
    res.send(data)
})

router.post('/transcation', function(req,res){
    const data = req.body
    const d = new model(data)
    d.save()
    res.end()
})

module.exports = router