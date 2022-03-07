const express = require("express")
const router = express.Router()

router.get('/', function (req, res) {
    res.send("here in user")
})

module.exports = router