const express = require('express')
const router = express.Router()

const Order = require('../models/order')
const orderItem = require('../models/order-item')

router.get('/', async (req, res) => {
    const ordersList = await Order.find()

    if (ordersList.length == 0) {
        console.log({ ordersList })
        res.status(500).json({ success: false, message: "no orders yet" })
    } else {
        res.status(200).json(ordersList)
    }
})

router.post("/", async (req, res) => {
    const orderItemsIds = req.body.orderItems.map(async (item) => {
        let newOrderItem = new orderItem({
            productId: item.productId,
            quantity: item.quantity
        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem.id
    })
    const newOrder = new Order({
        orderItems: orderItemsIds,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        status: req.body.status,
        totalPrice: req.body.totalPrice,
        user: req.body.user,
        phone: req.body.phone
    })
    newOrder.save();
    console.log({ orderItemsIds })
    res.send(newOrder);
})


module.exports = router