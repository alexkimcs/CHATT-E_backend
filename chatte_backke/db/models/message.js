const mongoose = require('../messageConnection')

const msgSchema = new mongoose.Schema({
    name: String,
    message: String,
    room: String
}, {timestamps: true})

const Message = mongoose.model('Message', msgSchema);

module.exports = Message