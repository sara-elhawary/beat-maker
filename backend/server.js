require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const morgan = require('morgan')

const productRouter = require('./routers/ProductsRouter')



const port = 3000
const api = process.env.API


app.use(express.static('./client/public'))
app.use(express.json())
app.use(morgan('tiny'))
app.use(`${api}/products`, productRouter)


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

app.listen(port, () => {
    console.log(api)
    console.log(`Example app listening on port ${port}`)

})