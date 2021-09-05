const mongoose = require('../connection')

const User2Schema = new mongoose.Schema(
    {

    },
    {timestamps: true}
)

const User2 = mongoose.model('Todo', User2Schema)

module.exports = User2