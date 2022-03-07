const express = require('express')
const router = express.Router()
const projectController = require('./projectController')


router.get('/', projectController.get)



module.exports = router