require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require("cors")

const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
const categoryRouter = require("./routers/category")
const userRouter = require("./routers/user")


const port = 3000
const api = process.env.API

app.use(cors())
app.options("*", cors())
app.use(express.json())
app.use(morgan('tiny'))

app.use(`${api}/products`, productRouter)
app.use(`${api}/orders`, orderRouter)
app.use(`${api}/cat`, categoryRouter)
app.use(`${api}/users`, userRouter)

require('./db')



app.listen(port, () => {
    console.log(api)
    console.log(`Example app listening on port ${port}`)

})