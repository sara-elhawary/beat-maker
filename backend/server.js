require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require("body-parser")

const port = 3000

app.use(express.static('./client/public'))
app.use(bodyParser.json())
require('./db')




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)

})