const mongoose = require('mongoose')

module.exports = mongoose.connect("mongodb+srv://elhawarysara92:ysbIz3RA48AR2mFa@cluster0.t556b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ECOMMERCE'
}).then(() => {
    console.log("connecting to database....")
}).catch((err) => {
    console.log(err)
    process.exit(1)
})


