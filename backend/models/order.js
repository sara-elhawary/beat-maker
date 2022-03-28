const mongoose = require('mongoose')
const _ = require("lodash")

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
    }],
    status: {
        type: String,
        required: true,
        default: 'Pending'
    },
    totalPrice: {
        type: Number,
        required: true
    },
    shippingAddress1: {
        type: String,
        required: true
    },
    shippingAddress2: {
        type: String,
        required: true
    },

    zip: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    }, state: {
        type: String,
        required: true
    }, country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
}, {
    toJSON: {
        transform: function (doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v
        }

    }
})


module.exports = mongoose.model("Order", orderSchema)