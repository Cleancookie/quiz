const socketio = require('socket.io');
const io = socketio();

io.on('connection', (socket) => {
    console.log(`✨ new user (${socket.id})`)
});

module.exports = io;