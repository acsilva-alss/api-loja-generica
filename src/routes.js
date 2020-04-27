const express = require('express');
const authMiddleware = require('./app/middlewares/auth');
const authController = require('./app/controllers/authControler');
const gerenteController = require('./app/controllers/gerenteController');
const normalUserController = require('./app/controllers/normalUserController');
const  bodyParser = require('body-parser');
const routes = express.Router();

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: false }));

/* authController */

//Registra usuário
routes.post('/auth/register', authController.register);

// FAz autenticação do usuário
routes.post('/auth/authenticate', authMiddleware, authController.authenticate);

routes.get('/auth/logout', authController.logout);

/* GerenteController */

//Lista produtos
routes.get('/admin',authMiddleware, gerenteController.listProducts);

//Procura um produto
routes.get('/admin/:productId', authMiddleware, gerenteController.queryProduct);

// Adicionar produtos
routes.post('/admin', authMiddleware, gerenteController.addProduct);

//Editar um produto
routes.put('/admin/:productId', authMiddleware, gerenteController.editProduct);
    
//deletar um produto
routes.delete('/admin/:productId', authMiddleware, gerenteController.deleteProduct);



/* normalUserController */

//Lista produtos
routes.get('/user', authMiddleware, normalUserController.listProducts);

//Procura um produto
routes.get('/user/:productId', authMiddleware, normalUserController.queryProduct);



module.exports = routes;