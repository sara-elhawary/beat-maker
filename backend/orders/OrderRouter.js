const express = require('express')
const cartRouter = express.Router()
const cartController = require("./OrderController")


cartRouter.post("/", cartController.displayCartContent)
cartRouter.get("/:id", cartController.getUserCart)
cartRouter.delete("/", cartController.emphtyCart)
cartRouter.delete("/all", cartController.emphtyCartCollection)



module.exports = cartRouter