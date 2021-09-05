const User2 = require('./models/user2')

const seedData = require('./user2-seeds.json')

User2.deleteMany({})
.then(() => {
    return User2.insertMany(seedData)
})
.then(console.log)
.catch(console.error)
.finally(()=>{
    process.exit()
})
