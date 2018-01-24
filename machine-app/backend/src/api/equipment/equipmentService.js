const Equipment = require('./equipment')

Equipment.methods(['get', 'post', 'put', 'delete'])
Equipment.updateOptions({ new: true, runValidators: true })

module.exports = Equipment