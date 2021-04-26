module.exports = (data) => {
    console.log(data)
    if (!!data) {
        window.state.background = data;
    }
};
