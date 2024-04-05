const DB = require('./db.json');

const getGames = () => {
    return DB.games;
}

module.exports = { getGames };
