module.exports = (click, canvas, socket) => {
    let rect = canvas.getBoundingClientRect(); // size of canvas element

    // x is number of pixels the cursor is from the left of the box, in %
    const x = (click.clientX - rect.left) / rect.width;
    const y = (click.clientY - rect.top) / rect.height;
    socket.emit('move', {
        x: x,
        y: y,
    });
};;