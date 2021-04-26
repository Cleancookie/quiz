module.exports = (player, ctx) => {
    if (!player.x || !player.y) {
        return;
    }

    // Drawing a square
    // ctx.fillStyle = player.colour;
    // ctx.fillRect(player.x, player.y, 5, 5);

    // Drawing emoji
    ctx.font = '18px Arial';
    ctx.fillText(player.icon || player.name, player.x - 9, player.y + 9);
};