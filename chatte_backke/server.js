const messages = require('./db/models/user');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


//app config       
const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//api routes
app.get('/', (req, res) => {
    res.send('Chatt-E')
})

app.post('/api/v1/messages', (req, res, next) => {
    const msg = req.body;
    messages.create(msg, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`new message created: \n ${data}`)
        }
        
    })
    .then(msg => res.json(msg)
    .catch(next)

})

//listen
app.listen(port, () => {console.log(`running on port ${port}`)})