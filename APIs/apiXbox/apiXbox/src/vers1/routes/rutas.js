const express = require('express')
const router = express.Router();
const apiCont = require('../../controllers/apiController')

router
    .get('/',apiCont.getGames)

    module.exports = router
