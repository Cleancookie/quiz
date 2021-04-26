const io = require('socket.io-client');
import { animate, easeOut } from "popmotion"
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
        duration: 1000 / 12,
        onUpdate: (latest) => {
            window.state.players[playerState.id] = latest;
        },
        ease: easeOut,
    });
});

canvas.addEventListener('click', function (data) {
    let rect = canvas.getBoundingClientRect();
    socket.emit('move', {
        x: Math.floor(data.clientX - rect.left),
        y: Math.floor(data.clientY - rect.top),
    });
});

const refreshBoard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!window.state) {
        return;
    }

    if (window.state.background) {
        canvas.style.backgroundImage = `url(${window.state.background})`;
    }
    
    const players = window.state.players;
    for (playerId in players) {
        const player = players[playerId]
        drawPlayer(player);
    }
}

const drawPlayer = (player) => {
    if (!player.x || !player.y) {
        return;
    }

    // Drawing a square
    // ctx.fillStyle = player.colour;
    // ctx.fillRect(player.x, player.y, 5, 5);

    // Drawing emoji
    ctx.font = '18px Arial';
    ctx.fillText(player.icon, player.x - 9, player.y + 9);
};

const refreshUsersList = () => {
    let userList = document.querySelector('.js-users');
    userList.innerHTML = '';
    let newLiTemplate = document.querySelector('.js-new-li');

    Object.entries(window.state.players).forEach((player) => {
        player = player[1];
        let newUser = newLiTemplate.cloneNode(true);
        newUser.removeAttribute('hidden');
        newUser.classList.remove('js-new-li');
        newUser.innerHTML = newUser.innerHTML.replace(
            '{{name}}',
            player.name,
        );
        newUser.style.color = player.colour;
        userList.appendChild(newUser);
    });
}

// Game loop at 144 fps
setInterval(refreshBoard, (1000/144))

// Move this into admin protected route
window.setImg = (url) => {
    socket.emit('requestImage', url)
}