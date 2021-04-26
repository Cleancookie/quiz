module.exports = function () {
    let userList = document.querySelector('.js-users');
    userList.innerHTML = '';
    let newLiTemplate = document.querySelector('.js-new-li');

    Object.entries(window.state.players).forEach((player) => {
        player = player[1];
        let newUser = newLiTemplate.cloneNode(true);
        newUser.removeAttribute('hidden');
        newUser.classList.remove('js-new-li');
        newUser.innerHTML = newUser.innerHTML.replace('{{name}}', player.name);
        newUser.innerHTML = newUser.innerHTML.replace(
            '{{playerId}}',
            player.id,
        );
        newUser.style.color = player.colour;
        userList.appendChild(newUser);
    });
};
