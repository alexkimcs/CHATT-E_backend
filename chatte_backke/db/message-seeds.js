const Message = require('./models/message')

const seedData = require('./message-seeds.json')

Message.deleteMany({})
.then(() => {
    return Message.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(()=>{
    process.exit()
})
