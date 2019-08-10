const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tranSchema = new Schema({
    amount: Number,
    category: String,
    vendor: String
})

const model = mongoose.model('transactions', tranSchema)

module.exports = model