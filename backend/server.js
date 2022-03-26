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

app.get(`${api}/`, (req, res) => {
    const product = {
        id: 1,
        prod_name: 'phone',
        image: 'url'
    }
    res.send(product);

})

app.post(`${api}/`, (req, res) => {
    const prod = req.body
    console.log(prod)
    res.send(prod);

})


app.listen(port, () => {
    console.log(api)
    console.log(`Example app listening on port ${port}`)

})