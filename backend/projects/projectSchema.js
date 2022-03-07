const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
    title: String,
    authorId: String,
    date: { type: Date, default: Date.now },
})


module.exports = projectSchema