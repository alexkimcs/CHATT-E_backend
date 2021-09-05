const mongoose = require('mongoose')

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://localhost:27017/chatte'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

.then((chat) => console.log(`Connect to db: ${chat.connection[0].name}`))
.catch((error) => console.log('Connection failed!', error))

module.exports = mongoose