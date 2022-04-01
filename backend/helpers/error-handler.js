function errorHandler(err, req, res, next) {
    if (err.name === "UnauthorizedError") {
        return res.status(401).json({ msg: "not authorized" })
    }
    else if (err.name === "validationError") {
        return res.status(401).json({ msg: err })
    }

    return res.status(500).json({ msg: err })
}

module.exports = errorHandler


