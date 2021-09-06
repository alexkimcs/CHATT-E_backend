const express = require('express');

//app config
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const port = process.env.PORT || 4000;

//Controllers go here
// const user1Controller = require('./controller/user1`');
// app.get('/user1', user1Controller)
// app.use('/user1', user1Controller)


//local port
app.get('/', (req, res) => {
    res.send('Chatt-E')
})


//LISTEN    
app.listen(port, () => {console.log(`running on port ${port}`)})