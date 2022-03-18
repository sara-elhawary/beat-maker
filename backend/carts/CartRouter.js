const express = require('express')
const cartRouter = express.Router()
const cartController = require("./cartController")


cartRouter.post("/", cartController.displayCartContent)
cartRouter.get("/:id", cartController.getUserCart)
cartRouter.delete("/", cartController.emphtyCart)
cartRouter.delete("/all", cartController.emphtyCartCollection)



module.exports = cartRouter