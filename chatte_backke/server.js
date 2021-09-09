const express = require('express');
const cors = require('cors');
const app = express();
const io = require('socket.io')(5000, {
    cors: {
        origin: "http://localhost:3000",
        method: ['GET', 'POST']
    }
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({entended: true}));


//Controllers go here
const userController = require('');
app.use('/api/users', userController);

const messageController = require('');
app.use('/api/messages', messageController);

app.get('/', (req,res) => {
    res.redirect('/api/messages')
});

//io
io.on("connection", socket => {
    console.log('user connected');
    // socket.emit('message', 'hello from backend');
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chatMessage', msg => {
        io.emit('message', msg)
    })
});

app.set('port', process.env.PORT || 4000)



//LISTEN    
app.listen(app.get('port'), () => {
    console.log(`Server is connected and listening on port: ${app.get('port')}`)
})