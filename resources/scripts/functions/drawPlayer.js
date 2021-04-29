module.exports = (player, canvas, options = {}) => {
    if (!player.x || !player.y) {
        return;
    }

    let blindfold = options.blindfold || false;
    let ctx = canvas.getContext('2d');

    // Users should still be able to see themselves
    if (player.me === true) {
        blindfold = false;
    }

    // Convert x and y into coords on the ctx
    let rect = canvas.getBoundingClientRect(); // canvas is bitmap size, rect is element size
    let scaleX = canvas.width / rect.width; // relationship bitmap vs. element for X
    let scaleY = canvas.height / rect.height; // relationship bitmap vs. element for Y

    // x is number of pixels the cursor is from the left of the box, in %
    const x = rect.width * player.x * scaleX;
    const y = rect.height * player.y * scaleY;

    // Drawing a square
    // ctx.fillStyle = player.colour;
    // ctx.fillRect(x, y, 5, 5);

    // Drawing emoji
    ctx.font = '18px Arial';
    ctx.fillText(!blindfold ? player.icon : '', x - 9, y + 9);
};;