const mongoose = require('mongoose')

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://localhost/chatte'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
})

.then((instance) => console.log(`Connect to db: ${instance.connection.name}`))
.catch((error) => console.log('Connection failed!', error))

module.exports = mongoose