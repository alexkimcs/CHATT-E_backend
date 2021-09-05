const mongoose = require('../connection')

const User1Schema = new mongoose.Schema(
    {

    },
    {timestamps: true}
)

const User1 = mongoose.model('Todo', User1Schema)

module.exports = User1