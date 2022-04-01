const express = require('express')
const router = express.Router()

const Order = require('../models/order')
const OrderItem = require('../models/order-item')


//get all orders
router.get('/', async (req, res) => {
    const ordersList = await Order.find().populate("user", "name -_id")

    if (ordersList.length == 0) {
        res.status(500).json({ success: false, message: "no orders yet" })
    } else {
        res.status(200).json(ordersList)
    }
})


//get user history orders
router.get("/user/:id",async (req,res)=>{
    const {id}=req.params
    const userOrders=await Order.find({user:id}).
    populate({path:"orderItems",populate:{path:"productId",populate:"category"}}).
    sort({"createdOn":-1})

    if(userOrders.length==0){
        return res.status(400).json({msg:"can't find user orders",success:false})
    }else{
        return res.status(200).json(userOrders)
    }

})

//post a new order
router.post("/", async (req, res) => {
    console.log("in")
    const orderItemsIds = Promise.all(req.body.orderItems.map(async (item) => {
        let newOrderItem = new OrderItem({  
            productId: item.productId,
            quantity: item.quantity
        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem.id
    }))

    const orderItemsIdsResolved = await orderItemsIds
    console.log("before")

    const OrderItemTotalPrice=await Promise.all(orderItemsIdsResolved.map(async(orderItemId)=>{
        const orderItem=await OrderItem.findById(orderItemId).populate("productId","price");
        const totalPrice=orderItem.productId.price*orderItem.quantity
        return totalPrice
    }))
console.log("aftre")
    const orderTotalPrice=OrderItemTotalPrice.reduce((itemOne,itemTwo)=>itemOne+itemTwo,0)
    console.log({orderTotalPrice})
    const newOrder = new Order({
        orderItems: orderItemsIdsResolved,
        shippingAddress1: req.body.shippingAddress1,
        shippingAddress2: req.body.shippingAddress2,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zip: req.body.zip,
        status: req.body.status,
        totalPrice: orderTotalPrice,
        user: req.body.user,
        phone: req.body.phone
    })
    await newOrder.save();
    console.log({ orderItemsIds })
    res.send(newOrder);
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
   Order.findByIdAndRemove(id).then(async order=>{
       if(order){
        await order.orderItems.map(async item=>{
            await OrderItem.findByIdAndRemove(item)
        })
        res.status(200).json({success:true,msg:"order and coressponding items are deleted"})
       }else{
        res.status(400).json({success:false,error:err})

       }
   }).catch(err=>{
       res.status(500).json({success:false,error:err})
   })

 
})



module.exports = router