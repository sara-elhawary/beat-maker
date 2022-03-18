const mongoose = require('mongoose')

async function main() {
    await mongoose.connect(process.env.DATABASE_URL)
}


main().catch((err) => {
    console.log(err)
    process.exit(1)
})