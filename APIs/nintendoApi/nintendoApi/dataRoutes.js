// aqui en este archivo hacemos la llamada para que nos de la info de la db

const dataHandler = require('./dataHandler');  //Esta línea importa el módulo dataHandler
//contiene la lógica para manejar la solicitud GET de la ruta /api/data y obtener la información de la base de datos.

// Exportamos un arreglo que contiene la definición de la ruta de la API
module.exports = [
    {
        // Método HTTP que esta ruta manejará (en este caso, GET)
        method: 'GET',
        
        // URL relativa de la ruta
        path: '/nintendo',
        
        // Función que se ejecutará cuando se realice una solicitud a esta ruta
        handler: dataHandler.getData
    }
];
