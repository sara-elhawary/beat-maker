const expressJWT = require("express-jwt")

module.exports = () => {
    const secret = process.env.TOKEN_SECRET
    return expressJWT({
        secret,
        algorithms: ['HS256']
    })
}