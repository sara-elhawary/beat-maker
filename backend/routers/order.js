const express = require('express')
const router = express.Router()

const Order = require('../models/order')
const OrderItem = require('../models/order-item')


//get all orders
router.get('/', async (req, res) => {
    const ordersList = await Order.find()
        .populate("user", "name -_id")

    if (ordersList.length == 0) {
        res.status(500).json({ success: false, message: "no orders yet" })
    } else {
        res.status(200).json(ordersList)
    }
})


//post a new order
router.post("/", async (req, res) => {
    const orderItemsIds = Promise.all(req.body.orderItems.map(async (item) => {
        let newOrderItem = new OrderItem({
            productId: item.productId,
            quantity: item.quantity
        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem.id
    }))
    const orderItemsIdsResolved = await orderItemsIds
    const newOrder = new Order({
        orderItems: orderItemsIdsResolved,
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


//get all user's orders
router.get("/user/:id", async (req, res) => {
    const userId = req.query.user
    const userOrdersList = await Order.find({ userId }).sort({ "createdOn": -1 }).populate("user", "name -_id")

    if (userOrdersList.length == 0) {
        console.log({ userOrdersList })
        res.status(500).json({ success: false, message: "no orders by this user yet" })
    } else {
        res.status(200).json(userOrdersList)
    }
})

//get order by order id
router.get("/:id", async (req, res) => {
    const orderId = req.params.id
    console.log({ orderId })
    const order = await Order.findById(orderId).populate({ path: "orderItems", populate: { path: "productId", populate: "category" } })

    if (!order) {
        res.status(400).json({ msg: "not found" })
    } else {
        res.status(200).json(order)
    }
})


//update order status
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const order = await Order.findByIdAndUpdate(id, { status: req.body.status }, { new: true })

    if (!order) {
        res.status(400).json({ msg: "not found" })
    } else {
        res.status(200).json({ order })
    }

})


//delete order  and its corresponding order items by order id
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const order = await Order.findByIdAndRemove(id)

    if (!order) {
        res.status(400).json({ msg: "not found" })
    } else {
        await order.orderItems.map(async item => {
            await OrderItem.findByIdAndRemove(item)
        })
        res.status(200).json({ order })
    }
})



module.exports = router