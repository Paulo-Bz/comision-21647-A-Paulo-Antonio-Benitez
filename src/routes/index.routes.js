const indexRoutes = require('express').Router();


//renderizar inicio
indexRoutes.get('/', (req, res) => {
    res.render('index');
});


module.exports = indexRoutes;