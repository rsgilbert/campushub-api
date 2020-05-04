var mongoose = require('mongoose')

var pictureSchema = mongoose.Schema({
    pictureUrl: String,
    itemId: { type: String, required: true },
    isProfile: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
})


module.exports = mongoose.model("Picture", pictureSchema)

