const projectModel = require('./projectModel')

module.exports = {
    get: async (req, res) => {
        const project = await new projectModel()
    }
}