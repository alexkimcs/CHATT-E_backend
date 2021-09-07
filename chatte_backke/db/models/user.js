const mongoose = require('../connection')

const userSchema = new mongoose.Schema(
    {
        name: String,
        message: String,
        recieved: false,
    },
    {timestamps: true}
)

const user = mongoose.model('user', userSchema)

module.exports = user;