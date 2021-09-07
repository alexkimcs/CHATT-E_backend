const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
// const io = require('socket.io')(400);

// //socket

// io.on("connection", socket => {
//   // either with send()
//   socket.send("Hello!");

//   // or with emit() and custom event names
//   socket.emit("greetings", "Hey!", { "ms": "jane" }, Buffer.from([4, 3, 3, 1]));

//   // handle the event sent with socket.send()
//   socket.on("message", (data) => {
//     console.log(data);
//   });

//   // handle the event sent with socket.emit()
//   socket.on("salutations", (elem1, elem2, elem3) => {
//     console.log(elem1, elem2, elem3);
//   });
// });

//app config
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Controllers go here
const user1Controller = require('./controller/user1`');
app.get('/user1', user1Controller)
app.use('/user1', user1Controller)


//local port
app.get('/', (req, res) => {
    res.send('Chatt-E')
})
const port = 4000
app.listen(port, () => {console.log(`running on port ${port}`)})