const mongoose = require('../connection')

const userSchema = new mongoose.Schema(
    {
        name: String,
        password: String,
    },
    {timestamps: true}
)

const User = mongoose.model('User', userSchema)

module.exports = User