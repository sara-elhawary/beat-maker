const expressJWT = require("express-jwt")

module.exports = () => {
    const secret = process.env.TOKEN_SECRET
    return expressJWT({
        secret,
        algorithms: ['HS256']
    })
        .unless({
            path: [
                {
                    url: '/api/v1/products'
                    , method: ["GET", "OPTIONS"]
                },
                '/api/v1/users/register',
                '/api/v1/users/login'
            ]
        })
}