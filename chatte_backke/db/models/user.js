const mongoose = require('../connection')

const userSchema = new mongoose.Schema(
    {
        name: String,
        message: String,
        recieved: Boolean,
        timestamp: String
    }
)

const User = mongoose.model('messageContent', userSchema)

module.exports = User;