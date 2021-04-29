const socketio = require('socket.io');
const {
    uniqueNamesGenerator,
    adjectives,
    animals,
} = require('unique-names-generator');
const getRandomEmoji = require('./functions/getRandomEmoji');

const io = socketio();

let state = {
    players: {},
    background: null,
    blindfold: false,
};

io.on('connection', (socket) => {
    const authToken = socket?.handshake?.auth?.token;
    socket.join('MainRoom');

    if (authToken != '69420') {
        // Dont want to create player for admin

        // Init new player on server side
        state.players[socket.id] = {
            id: socket.id,
            name: getRandomName(),
            colour: getRandomColor(),
            icon: getRandomEmoji(),
        };

        console.log(`✨ new user ${state.players[socket.id].icon} ${state.players[socket.id].name}(${socket.id})`);
    } else {
        console.log(
            `✨ new Admin(${socket.id})`,
        );
    }

    if (authToken == '69420') {
        // Admin functions
        socket.on('icon.set', (data) => {
            state.players[data.playerId].icon = data.icon;
            console.log(`🚨 ${state.players[data.playerId].name} now has the icon ${data.icon}`);

            io.in('MainRoom').emit('fullState', state);
        });

        socket.on('blindfold.set', (data) => {
            state.blindfold = !!data.blindfold;
            console.log(`🚨 Blindfold is now ${data.blindfold ? 'on' : 'off'}`);
            io.in('MainRoom').emit('fullState', state);
        });
    }

    // Init player on client side
    io.in('MainRoom').emit('fullState', state);

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

        io.in('MainRoom').emit(
            'playerStateUpdate',
            state.players[socket.id],
        );
    });

    socket.on('requestImage', (url) => {
        state.background = url;
        io.in('MainRoom').emit('setImage', url);
    });

    return;
});

function setPosition(playerId, x, y) {
    console.log(`🏃 User(${playerId}) moved to [${x}, ${y}]`);
    state.players[playerId].x = x;
    state.players[playerId].y = y;
}

function getRandomColor() {
    const colours = ['#EED1CC', '#EBEECB', '#D6EECB', '#CDEEDD', '#CDD7EE', '#E8CCEE'];

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
