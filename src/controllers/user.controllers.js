const Blog = require('../models/user.models');

const userControllers = {};



//CONTROLADOR para obtener todos los usuarios
userControllers.getAllUsers = async (req, res) => {
    const users = await Blog.findAll();
    res.render("user", {result: users});
};

//CONTROLADOR PARA ABRIR LA PAGINA DE CARGA DE USUARIO
userControllers.indexCreateUser =  (req, res) => {
    res.render('createUser');
}

//CONTROLADOR PARA CREAR USUARIO
userControllers.createUser = async (req, res) => {
    const {titulo, contenido, imagen} = req.body

    const user = {
        titulo: titulo,
        contenido: contenido,
        imagen: imagen,
    };

    try {
        const nuevoUsuario = await Blog.create(user);
        res.redirect('/user');
    } catch (error) {
        res.status(400).send({ mensaje: "Error al cargar los datos"});
    }
   
};

//CONTROLADOR PARA ELIMINAR USUARIO
userControllers.deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const deleteUser = await Blog.destroy({
            where: {
                id: id,
            },
        });
    if(deleteUser) {
            return res.redirect('/user');
        } else{
            return res.status(400).send({ mensaje: 'No se encuentra el usuario para eliminar'});
        } 
    } catch (error) {
            return res.status(400).send({mensaje: 'Error al eliminar los datos de usuario'});
        
        }
    
};

//CONTROLADOR PARA RENDERIZAR LA PAGINA Y EDITAR USUARIO
userControllers.indexEditUser = async (req, res) => {
    const {id} = req.params;
    const user = await Blog.findOne({ where: {id : id}});
    res.render('editUser', { user: user});
};


//CONTOLADOR PARA EDITAR USUARIO
userControllers.editUser = async (req, res) => {
     const {id, titulo, contenido, imagen} = req.body;

        const updateUser = {
            titulo: titulo,
            contenido: contenido,
            imagen: imagen,
        };
        try {
            const userAfterEdit = await Blog.update(updateUser, {
                where: {
                    id: id,
                },
            });
            return res.redirect('/user');

        } catch (error) {

            return res.status(400).send({mensaje: 'Error en el servidor al actualizar usuario'});
        }
    }



module.exports = { userControllers };