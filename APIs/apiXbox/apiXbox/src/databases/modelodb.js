const DB = require("./db.json")

const getGames = () =>{
    return DB.Games
}

module.exports = {
    getGames
}