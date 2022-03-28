const expressJWT = require("express-jwt")

module.exports = () => {
    const secret = process.env.TOKEN_SECRET
    return expressJWT({
        secret,
        algorithms: ['HS256'],
        isRevoked: async (req, payload, done) => {
            if (!payload.isAdmin) {
                done(null, true)
            }
            done()
        }
    })
        .unless({
            path: [
                { url: /\/api\/v1\/products(.*)/, methods: ['GET', 'OPTIONS'] },
                { url: /\/api\/v1\/categories(.*)/, methods: ['GET', 'OPTIONS'] },
                '/api/v1/users/register',
                '/api/v1/users/login'
            ]
        })
}

