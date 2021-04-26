import { animate, easeOut } from 'popmotion';

module.exports = (playerState) => {
    animate({
        from: window.state.players[playerState.id],
        to: playerState,
        duration: 1000 / 12,
        onUpdate: (latest) => {
            window.state.players[playerState.id] = latest;
        },
        ease: easeOut,
    });
}