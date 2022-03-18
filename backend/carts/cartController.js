const Cart = require("./CartModel");

module.exports = {
    displayCartContent: async (req, res) => {
        const { userId, products } = req.body
        await Cart.create({ userId, products })
        console.log({ userId, products })
        res.send({ userId, products })
    },
    emphtyCart: async (req, res) => {

    },
    emphtyCartCollection: async (req, res) => {
        const count = await Cart.deleteMany();
        res.send(count)
    },
    getUserCart: async (req, res) => {
        const param = req.params
        // why doesn't it show in console.log??
        // console.log({ param })
        res.send(req.params)
    }
}