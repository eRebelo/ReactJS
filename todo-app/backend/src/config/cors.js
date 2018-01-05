module.exports = function (req, res, next) {
    res.header('Accecss-Control-Allow-Origin', '*')
    res.header('Accecss-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Accecss-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}