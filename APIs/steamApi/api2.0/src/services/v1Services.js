const v1Model = require('../databases/v1Model.js');

const getGames = () => {
    const games = v1Model.getGames();
    return games;
};

module.exports = {
    getGames
};