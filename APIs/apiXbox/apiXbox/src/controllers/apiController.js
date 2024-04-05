const service = require("../services/services")

const getGames = (req,res) => {
    const games = service.getGames()
    res.send(games)
}


module.exports = {
    getGames
}