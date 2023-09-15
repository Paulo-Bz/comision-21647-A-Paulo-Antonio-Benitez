const userRoutes = require('express').Router();
const { userControllers } = require('../controllers/user.controllers'); 



//ruta para ver usuarios
userRoutes.get('/user', userControllers.getAllUsers);

userRoutes.get('/createUser', userControllers.indexCreateUser);

//ruta para crear usuario o blog nuevo
userRoutes.post('/saveUser', userControllers.createUser);

//ruta para eliminar usuario
userRoutes.get('/deleteUser/:id', userControllers.deleteUser);

//ruta para renderizar la pagina para editar usuario
userRoutes.get('/editUser/:id', userControllers.indexEditUser);

//ruta para editar usuario
userRoutes.post('/updateUser', userControllers.editUser);



module.exports = userRoutes;