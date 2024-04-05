const express = require("express"); //Rquiero express pa' comenzar
const v1 = require('./src/v1/routes/v1index.js');
const app = express(); //Hago una nueva app de expreyss
const PORT = process.env.PORT || 3000; //Extraemos el puerto de las variables de entorno, si no lo encuentra, traemos por default el 3000

app.listen(PORT, () => { console.log("------------------------------------------\n CONECTO EXITOSAMENTE \n------------------------------------------")}); 

app.use('/steam', v1);

