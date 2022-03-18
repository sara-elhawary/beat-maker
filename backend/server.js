require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
// const projectRouter = require('./projects/projectRouter')
// const userRouter = require('./Users/userRouter')
const cartRouter = require('./carts/CartRouter')
const port = 3000

app.use(express.static('./client/public'))
app.use(bodyParser.json())

// app.use('/project', projectRouter)
// app.use('/login', userRouter)
app.use('/cart', cartRouter)

require('./db')

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})