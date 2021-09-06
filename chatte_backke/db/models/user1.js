const mongoose = require('../connection')

const User1Schema = new mongoose.Schema(
    {
        userid: String ,
        name: String,
        message: String,
        recieved: false,
    },
    {timestamps: true}
)

const User1 = mongoose.model('Todo', User1Schema)

module.exports = User1