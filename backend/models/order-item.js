const mongoose = require('mongoose')

const orderItemSchema = mongoose.Schema({
    productId: {
        ref: 'Product',
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    quantity: {
        required: true,
        type: Number
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

module.exports = mongoose.model("OrderItem", orderItemSchema)