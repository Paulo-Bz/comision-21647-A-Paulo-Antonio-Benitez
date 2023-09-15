require('dotenv').config();
const express = require('express');
const path = require('node:path');
const helmet = require('helmet');
const morgan = require('morgan');
const { TestConnection } = require('./database/db');
const userRoutes = require('./routes/user.routes');
const indexRoutes = require('./routes/index.routes');


const app = express()
const PUERTO = process.env.PUERTO



// Middlewares
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Configuracion EJS como motor de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Test de conexion
TestConnection();

app.use(indexRoutes);
app.use(userRoutes);


app.listen(PUERTO, () => {
    console.log(`El servidor está corriendo en el puerto ${PUERTO}`)
})