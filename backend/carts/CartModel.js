const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: mongoose.ObjectId,
        products: [{
            productId: mongoose.ObjectId,
            quantity: "Number"
        }]
    }
)

const Cart = mongoose.model("Cart", CartSchema);
module.exports = Cart;