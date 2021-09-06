const express = require('express')
const user1Controller = require('./controller/user1`');

//app config
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Controllers go here
app.get('/user1', user1Controller)
app.use('/user1', user1Controller)


//local port
app.get('/', (req, res) => {
    res.send('Chatt-E')
})
const port = 4000
app.listen(port, () => {console.log(`running on port ${port}`)})