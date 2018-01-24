const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    type: { type: String, required: true },
    hostname: { type: String, required: true },
    ip_address: { type: String, required: true },
    location: { type: String, required: true },
    fabricator: { type: String, required: true },
    model: { type: String, required: true },
    serial: { type: String, required: true },
    so_version: { type: String, required: true },
    active_time: { type: Date, default: Date.now }
})

module.exports = restful.model('Equipment', todoSchema)
