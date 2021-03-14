const socketio = require('socket.io');
const io = socketio();

let state = {
    players: {},
    background: null,
};

io.on('connection', (socket) => {
    console.log(`✨ new user playerId = ${socket.id}`);

    // Init new player on server side
    state[socket.id] = {};

    // Init player on client side
    socket.emit('fullState', state);

    // Socket event listeners
    socket.on('getFullState', (data) => {
        return socket.emit('fullState', state);
    });

    socket.on('move', (data) => {
        // Check there is an x and y
        if (!(x in data) || !(y in data)) {
            return;
        }

        setPosition(socket.id, data.x, data.y);
    });
});

async function setPosition(playerId, x, y) {
    state[playerId].x = x;
    state[playerId].y = y;
}

module.exports = io;
