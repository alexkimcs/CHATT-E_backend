const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
    },
    {timestamps: true}
)

const User = mongoose.model('User', userSchema)

module.exports = User