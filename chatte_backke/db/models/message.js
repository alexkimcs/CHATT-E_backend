const mongoose = require('../connection')

const msgSchema = new mongoose.Schema(
    {
        name: String,
        message: String,
        timestamps: String,
        recieved: false
    }
)

const Message = mongoose.model('Message', msgSchema);

module.exports = Message;