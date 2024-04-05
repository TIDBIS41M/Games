const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const xbox = require('./src/vers1/routes/rutas')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Puedes reemplazar '*' con el dominio específico que deseas permitir
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return res.status(200).json({});
    }
    next();
});
app.use('/xbox',xbox)

app.listen(port,()=>{console.log(`conecto al puerto http://localhost:${port}`)})