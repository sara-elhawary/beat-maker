const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: mongoose.ObjectId,
        products: [{
            productId: { type: mongoose.Types.ObjectId, required: true },
            quantity: { type: "Number", required: true },
            price: { type: "Number", required: true }

        }]
    }
)

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;