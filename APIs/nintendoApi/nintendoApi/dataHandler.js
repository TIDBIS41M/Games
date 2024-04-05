// Importamos los datos desde el archivo data.json
const data = require('./data.json');

// Exportamos una función llamada getData que manejará las solicitudes GET
exports.getData = (request, h) => {
    // Accedemos a la información de los juegos dentro de data
    const games = data.games;
    
    // Devolvemos los datos de los juegos al cliente como respuesta a la solicitud GET
    return games;
};
