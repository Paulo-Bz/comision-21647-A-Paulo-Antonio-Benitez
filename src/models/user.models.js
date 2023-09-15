const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const Blog = sequelize.define('Blog', {

    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contenido: {
        type: DataTypes.STRING(10000),
        allowNull: false
    },
    imagen: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
}, {
});

// Sincronizacion con base de datos..

Blog.sync();


module.exports = Blog;