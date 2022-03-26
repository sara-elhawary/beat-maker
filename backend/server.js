require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')
const port = 3000
const api = process.env.API

app.use(express.static('./client/public'))
app.use(express.json())
app.use(morgan('tiny'))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ECOMMERCE'
}).then(() => {
    console.log("connecting to database....")

}).catch((err) => {
    console.log(err)
    process.exit(1)
})





app.get(`${api}/`, async (req, res) => {
    const productList = await Product.find()

    if (!productList) {
        res.status(500).json({ success: false })
    }
    res.send(productList);

})

app.post(`${api}/`, (req, res) => {
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


app.listen(port, () => {
    console.log(api)
    console.log(`Example app listening on port ${port}`)

})