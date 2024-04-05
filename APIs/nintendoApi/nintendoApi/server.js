// Importamos el módulo Hapi para crear el servidor
const Hapi = require('@hapi/hapi');

// Importamos las definiciones de ruta desde el archivo routes.js
const routes = require('./routes');

// Función async que inicializa el servidor
const init = async () => {
    // Creamos una instancia del servidor Hapi
    const server = Hapi.server({
        // Configuramos el puerto en el que el servidor escuchará las solicitudes
        port: 3000,
        // Configuramos el host en el que el servidor escuchará las solicitudes (en todas las interfaces de red)
        host: '0.0.0.0' // Esto hace que el servidor escuche en todas las interfaces de red
    });

    // Añadimos las rutas al servidor
    server.route(routes);

    // Iniciamos el servidor
    await server.start();
    
    // Imprimimos en la consola la URL en la que el servidor está escuchando
    console.log('Servidor corriendo en %s', server.info.uri);
};

// Manejamos errores no controlados
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

// Inicializamos el servidor llamando a la función init
init();

