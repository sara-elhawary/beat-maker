const mongoose = require('mongoose')
const _ = require('lodash');


const productSchema = mongoose.Schema({
    name: String,
    image: String,
    quantity: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Product", productSchema)