var mongoose = require('mongoose')

var orderSchema = mongoose.Schema({
    hall: String,
    phoneNumber: String,
    itemId: String,
    time: { type: Number, default: new Date().getTime() },
    completed: { type: Boolean, default: false },
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model("Order", orderSchema)

