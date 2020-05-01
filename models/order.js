var mongoose = require('mongoose')

var orderSchema = mongoose.Schema({
    hall: String,
    phoneNumber: String,
    itemId: String,
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model("Order", orderSchema)

