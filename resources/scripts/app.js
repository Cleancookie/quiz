const refreshUsersList = require('./functions/refreshUsersList');
const refreshBoard = require('./functions/refreshBoard');
const playerStateUpdate = require('./functions/playerStateUpdate');
const setImage = require('./functions/setImage');

const io = require('socket.io-client');
const canvasClick = require('./functions/canvasClick');

const socket = io();

const canvas = document.querySelector('#canvas');

/** @type {CanvasRenderingContext2D} ctx */
const ctx = canvas.getContext('2d');

socket.on('fullState', (data) => {
    window.state = data;

    // mark the current user
    window.state.players[socket.id].me = true;

    refreshUsersList();
});

socket.on('setImage', (data) => {
    setImage(data);
});

socket.on('playerStateUpdate', (playerState) => {
    playerStateUpdate(playerState);
});

canvas.addEventListener('click', (data) => {
    canvasClick(data, canvas, socket)
});

// Game loop at 144 fps
setInterval(() => {
    refreshBoard(canvas, { blindfold: window.state.blindfold });
}, 1000 / 144);
