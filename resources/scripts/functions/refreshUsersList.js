module.exports = function () {
    let userList = document.querySelector('.js-users');
    userList.innerHTML = '';
    let newLiTemplate = document.querySelector('.js-new-li');

    Object.entries(window.state.players).sort((a, b) => {
        if (a[1].name < b[1].name) return -1;
        if (a[1].name > b[1].name) return 1;
        return 0;
    }).forEach((player) => {
        player = player[1];
        let newUser = newLiTemplate.cloneNode(true);
        newUser.removeAttribute('hidden');
        newUser.classList.remove('js-new-li');
        newUser.innerHTML = newUser.innerHTML.replace('{{name}}', `${player.icon} ${player.name}` + (player.me === true ? ' (me)' : ''));
        newUser.innerHTML = newUser.innerHTML.replace(
            '{{playerId}}',
            player.id,
        );
        newUser.style.color = player.colour;
        userList.appendChild(newUser);
    });
};
