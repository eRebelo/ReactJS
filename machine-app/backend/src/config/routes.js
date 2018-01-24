const express = require('express')

module.exports = function (server) {

    // API Routes
    const router = express.Router()
    server.use('/api', router)

    // Equipment Routes
    const equipmentService = require('../api/equipment/equipmentService')
    equipmentService.register(router, '/equipment')
}