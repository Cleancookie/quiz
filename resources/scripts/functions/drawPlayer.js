module.exports = (player, ctx, options = {}) => {
    if (!player.x || !player.y) {
        return;
    }

    let blindfold = options.blindfold || false;

    // Users should still be able to see themselves
    if (player.me === true) {
        blindfold = false;
    }

    // Drawing a square
    // ctx.fillStyle = player.colour;
    // ctx.fillRect(player.x, player.y, 5, 5);

    // Drawing emoji
    ctx.font = '18px Arial';
    ctx.fillText(!blindfold ? player.icon : '', player.x - 9, player.y + 9);
};