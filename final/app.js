const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Configuración de la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'node_crud',
    port: 3308
});

db.connect(err => {
    if(err) {
        console.error('Error de conexión a la DB', err);
    } else {
        console.log('Base de datos conectada');
    }
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Compartir la conexión a la DB con las rutas
app.use((req, res, next) => {
    req.db = db;
    next();
});

// Rutas
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Iniciar el servidor
const port = 3005;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://127.0.0.1:${port}`);
});

