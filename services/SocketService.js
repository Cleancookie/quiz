const socketio = require('socket.io');
const {
    uniqueNamesGenerator,
    adjectives,
    animals,
} = require('unique-names-generator');

const io = socketio();

let state = {
    players: {},
    background: null,
};

io.on('connection', (socket) => {
    // Init new player on server side
    state.players[socket.id] = { 
        name: getRandomName(),
        colour: getRandomColor()
     };
    socket.join('MainRoom');
    console.log(`✨ new user ${state.players[socket.id].name}(${socket.id})`);
    io.in('MainRoom').emit('fullState', state);

    // Init player on client side
    socket.emit('fullState', state);

    // Socket event listeners
    socket.on('disconnect', () => {
        delete state.players[socket.id];
        io.in('MainRoom').emit('fullState', state);
    });

    socket.on('getFullState', (data) => {
        return socket.emit('fullState', state);
    });

    socket.on('move', (data) => {
        // Check there is an x and y
        if (!('x' in data) || !('y' in data)) {
            return;
        }

        setPosition(socket.id, data.x, data.y);

        io.in('MainRoom').emit('fullState', state);
    });

    socket.on('requestImage', (url) => {
        state.background = url;
        io.in('MainRoom').emit('setImage', url);
    });
});

function setPosition(playerId, x, y) {
    console.log(`🏃 User(${playerId}) moved to [${x}, ${y}]`);
    state.players[playerId].x = x;
    state.players[playerId].y = y;
}

function getRandomColor() {
    const colours = [
        '#BB5A3E',
        '#ABBB3E',
        '#6CBB3E',
        '#40BFBB',
        '#4644C1',
        '#BC47C2',
        '#0D2623',
    ];

    return colours[Math.floor(Math.random() * colours.length)];
}

function getRandomName() {
    return uniqueNamesGenerator({
        dictionaries: [adjectives, animals],
        separator: ' ',
        style: 'capital',
    });
}

module.exports = io;
