const drawPlayer = require("./drawPlayer.js");

module.exports = (ctx, options) => {
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
        drawPlayer(player, ctx, { blindfold: options.blindfold || false });
    }
};
