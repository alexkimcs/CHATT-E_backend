const User1 = require('./models/user1')

const seedData = require('./user1-seeds.json')

User1.deleteMany({})
.then(() => {
    return User1.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(()=>{
    process.exit()
})
