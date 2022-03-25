const { mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        products: [{
            type: mongoose.Schema.types.ObjectId,
            ref: "OrderItem",
            required: true
        }],
        totalPrice: {
            type: Number
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        status: {
            type: String,
            required: true,
            default: 'Processing'
        },
        shippingAddress1: {
            type: String,
            required: true
        },
        shippingAddress2: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        DateOfCreation: {
            type: Date,
            default: Date.now()
        }
    }
)

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;