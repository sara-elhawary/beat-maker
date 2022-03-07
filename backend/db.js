const mongoose = require('mongoose')

async function main() {
    // await mongoose.connect(process.env.DATABASE_URL)
    await mongoose.connect('mongodb://localhost:27017/todo-app')
}


main().catch((err) => {
    console.log(err)
    process.exit(1)
})