const v1Service = require('../services/v1Services.js');

const getGames = (req,res) => {
    res.send(v1Service.getGames());
};

module.exports = { 
    getGames
};