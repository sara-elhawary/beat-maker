const mongoose = require("mongoose")


const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }

}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
        }
    }
})

module.exports = mongoose.model('Category', categorySchema)