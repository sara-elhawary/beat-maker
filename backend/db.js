const mongoose = require('mongoose')

module.exports = mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ECOMMERCE'
}).then(() => {
    console.log("connecting to database....")

}).catch((err) => {
    console.log(err)
    process.exit(1)
})