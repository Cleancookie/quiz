const io = require('socket.io-client');
import { animate } from "popmotion"
const socket = io();
const canvas = document.querySelector('#canvas');
/**
 * @type {CanvasRenderingContext2D} ctx
 */
const ctx = canvas.getContext('2d');

socket.on('fullState', (data) => {
    window.state = data;
    refreshUsersList();
});

socket.on('setImage', (data) => {
    if (!!data) {
        window.state.background = data;
    }
})

socket.on('playerStateUpdate', (playerState) => {
    animate({
        from: window.state.players[playerState.id],
        to: playerState,
        duration: 50,
        onUpdate: (latest) => {window.state.players[playerState.id] = latest},
    });
});

canvas.addEventListener('click', function (data) {
    let rect = canvas.getBoundingClientRect();
    socket.emit('move', {
        x: Math.floor(data.clientX - rect.left),
        y: Math.floor(data.clientY - rect.top),
    });
});

const refreshBoard = async () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!window.state) {
        return;
    }

    if (window.state.background) {
        canvas.style.backgroundImage = `url(${window.state.background})`;
    }
    
    const players = window.state.players;
    for (playerId in players) {
        const player = players[playerId];
        if (!player.x || !player.y) {
            continue;
        }
        ctx.fillStyle = player.colour;
        ctx.fillRect(player.x, player.y, 5, 5);
    }
}

const refreshUsersList = async () => {
    const names = Object.entries(window.state.players).map((player) => {
        return player[1].name;
    });

    let userList = document.querySelector('.js-users');
    userList.innerHTML = '';
    let newLiTemplate = document.querySelector('.js-new-li');

    names.forEach((name) => {
        let newUser = newLiTemplate.cloneNode(true);
        newUser.removeAttribute('hidden');
        newUser.classList.remove('js-new-li');
        newUser.innerHTML = name;
        userList.appendChild(newUser);
    })
}

// Game loop at 144 fps
setInterval(refreshBoard, (1000/144))

// Move this into admin protected route
window.setImg = (url) => {
    socket.emit('requestImage', url)
}