const mongoose = require('mongoose');

const mongoURI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://localhost/chatte'

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(instance => console.log(`Connected to DB: ${instance.connection.name}`))
.catch(error => console.log(`Connection failed`, error))

module.exports = mongoose;