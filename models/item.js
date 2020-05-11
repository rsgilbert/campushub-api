var mongoose = require('mongoose')

var itemSchema = mongoose.Schema({
    name: String,
    price: Number,
    displayPicture: String,
    updatedAt: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model("Item", itemSchema)

