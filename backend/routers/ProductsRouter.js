const express = require('express')
const router = express.Router()
const Product = require("../models/productModel")


router.get("/", async (req, res) => {
    const productList = await Product.find()

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);

})

router.post("/", (req, res) => {
    const { name, image, quantity } = req.body
    const prod = new Product({
        name, image, quantity
    })
    prod.save().then((createdProd) => {
        res.status(201).json(createdProd)
    }).catch((err) => {
        res.status(500).json({
            success: false,
            error: err
        })
    })
})
module.exports = router;