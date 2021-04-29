const drawPlayer = require("./drawPlayer.js");

module.exports = (canvas, options) => {
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!window.state) {
        console.log('No window state found.');
        return;
    }

    if (window.state.background) {
        canvas.style.backgroundImage = `url(${window.state.background})`;
    }

    const players = window.state.players;
    for (playerId in players) {
        const player = players[playerId];
        drawPlayer(player, canvas, { blindfold: options.blindfold || false });
    }
};
