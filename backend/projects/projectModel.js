const mongoose = require("mongoose")
const projectSchema = require('./projectSchema')

const projectModel = mongoose.model('Project', projectSchema)

module.exports = projectModel