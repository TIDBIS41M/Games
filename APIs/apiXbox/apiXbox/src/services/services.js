const modelDB = require("../databases/modelodb")

const getGames = ()=>{
    const games = modelDB.getGames()
    return games
}

module.exports = {
    getGames
}