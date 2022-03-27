const express = require('express')
const router = express.Router()
const Product = require('../models/product')
const Category = require("../models/category")
const mongoose = require("mongoose")

//get all products
router.get("/", async (req, res) => {
    // const productList = await Product.find().select("name image price -_id")
    const productList = await Product.find().populate("category")

    if (!productList) {
        res.status(500).json({ success: false })
    } else {
        res.send(productList);
    }
})


//get products by category
router.get("/", async (req, res) => {
    let filter = {}
    if (req.query.categories) {
        filter = { categories: req.query.categories.split(",") }
    }
    const productList = await Product.find(filter).populate("category")

    if (!productList) {
        res.status(500).json({ success: false })
    } else {
        res.send(productList);
    }
})

//get products count
router.get("/get/count", async (req, res) => {
    const productCount = await Product.countDocuments()

    if (!productCount) {
        res.status(500).json({ success: false })
    } else {
        console.log({ productCount })
        res.send({ productCount });

    }

})


//get featured products with limit
router.get("/get/featured/:count", async (req, res) => {

    const count = req.params.count ? req.params.count : 0
    const products = await Product.find({ isFeatured: true }).limit(+count)

    if (!products) {
        res.status(500).json({ success: false })
    } else {
        res.send({ products });
    }

})

//get all featured products
router.get("/get/featured", async (req, res) => {
    const products = await Product.find({ isFeatured: true })

    if (!products) {
        res.status(500).json({ success: false })
    } else {
        res.send({ products });
    }

})

//get product by id
router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id).populate("category")
    if (!product) {
        res.status(500).json({ success: false })
    } else {
        res.send(product);

    }

})



//post new product
router.post("/", async (req, res) => {

    const ProdCategory = await Category.findById(req.body.category).catch((err) => {
        return res.status(400).send({ msg: "Invalid Category", err })
    })
    if (!ProdCategory) return res.status(400).json({ msg: "unefined Category" })

    const { name, image, images, quantity, description, brand, price, category, isFeatured, numReviews, dateCreated, rate, richDescription } = req.body
    let newProduct = new Product({
        name, image, images, quantity, description, brand, price, category, isFeatured, numReviews, dateCreated, rate, richDescription
    })
    newProduct = await newProduct.save()
    if (!newProduct) {
        return res.status(500).json({ msg: "new product is not saved", success: false })
    } else {
        return res.status(200).json({ newProduct, success: true })
    }
})




//update a product by id
router.put("/:id", async (req, res) => {

    const ProdCategory = await Category.findById(req.body.category).catch((err) => {
        return res.status(400).send({ msg: "Invalid Category", err })
    })
    if (!ProdCategory) return res.status(400).json({ msg: "undefined Category" })

    const id = req.params.id
    const { name, image, images, quantity, description, brand, price, category, isFeatured, numReviews, dateCreated, rate, richDescription } = req.body
    const product = await Product.findOneAndUpdate(id, { name, image, images, quantity, description, brand, price, category, isFeatured, numReviews, dateCreated, rate, richDescription }, { new: true }).catch(err => {
        return res.status(500).send(err)
    })
    if (!product) {
        return res.status(500).json({ msg: "can't be reached" })
    } else {
        return res.status(200).json(product)
    }
})




//delete a product by id
router.delete("/:id", (req, res) => {

    const _id = req.params.id
    if (!mongoose.isValidObjectId(_id)) {
        return res.status(400).json({ msg: "invalid Id" })
    }

    Product.findOneAndDelete({ _id })
        .then((ret) => {
            if (ret) {
                return res.status(200).json({ msg: "Product is found and deleted" })
            } else {
                return res.status(400).json({ msg: "Product can't be found!" })
            }
        }).catch((err) => {
            return res.status(500).json({ error: err, msg: "Product error" })
        })

})

module.exports = router;




