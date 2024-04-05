const express = require("express"); //Rquiero express pa' comenzar
const router = express.Router(); //Creo el objeto de la ruta que va a utilizar express
const v1Controller = require('../../controllers/v1indexController.js');

router
    .get('/', v1Controller.getGames)
    module.exports = router;