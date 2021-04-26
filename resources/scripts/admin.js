const refreshUsersList = require('./functions/refreshUsersList');
const refreshBoard = require('./functions/refreshBoard');
const playerStateUpdate = require('./functions/playerStateUpdate');
const setImage = require('./functions/setImage');

const io = require('socket.io-client');

const socket = io('/', {
    auth: {
        token: '69420',
    },
});

const canvas = document.querySelector('#canvas');

/**
 * ADMIN FUNCTIONS
 */

let userList = document.querySelector('.js-users');
userList.addEventListener('click', (e) => {
    if (e.target.classList.contains('js-set-icon')) {
        const icon = prompt('Set icon to');
        const playerId = e.target.dataset.playerId;

        socket.emit('icon.set', { playerId: playerId, icon: icon });
    }
});

const setImageButton = document.querySelector('.js-set-image');
setImageButton.addEventListener('click', () => {
    const url = prompt('Image url');
    socket.emit('requestImage', url);
})

/**
 * REGULAR DISPLAY STUFF BELOW
 */

/**
 * @type {CanvasRenderingContext2D} ctx
 */
const ctx = canvas.getContext('2d');

socket.on('fullState', (data) => {
    window.state = data;
    refreshUsersList();
});

socket.on('setImage', (data) => {
    setImage(data);
});

socket.on('playerStateUpdate', (playerState) => {
    playerStateUpdate(playerState);
});

// Game loop at 144 fps
setInterval(() => {
    refreshBoard(ctx);
}, 1000 / 144);
