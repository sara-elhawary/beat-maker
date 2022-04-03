const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb+srv://ahmedismail40000:22Oz7X2L4SEUrBRJ@cluster0.t556b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ECOMMERCE'
}).then(() => {
    console.log("connecting to database....")

}).catch((err) => {
    console.log(err)
    process.exit(1)
})