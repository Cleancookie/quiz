const socket = io();
const canvas = document.querySelector('#canvas');
/**
 * @type {CanvasRenderingContext2D} ctx
 */
const ctx = canvas.getContext('2d');

socket.on('fullState', (data) => {
    window.state = data;
    drawPlayerMarkers();
});

canvas.addEventListener('click', function (data) {
    let rect = canvas.getBoundingClientRect();
    socket.emit('move', {
        x: Math.floor(data.clientX - rect.left),
        y: Math.floor(data.clientY - rect.top),
    });
});

const drawPlayerMarkers = () => {
    if (!('players' in window.state)) {
        return;
    }
    clearBoard();
    const players = window.state.players;

    for (playerId in players) {
        const player = players[playerId];
        if (!player.x || !player.y) {
            continue;
        }
        ctx.fillStyle = player.colour;
        ctx.fillRect(player.x, player.y, 5, 5);
    }
};

const clearBoard = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
