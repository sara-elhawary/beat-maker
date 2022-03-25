const { mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema(
    {
        quantity: {
            type: Number,
            required: true
        },
        Product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product '
        }
    }
)

const OrderItem = mongoose.model("OrderItem", OrderSchema);
module.exports = OrderItem;