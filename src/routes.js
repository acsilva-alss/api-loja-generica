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
routes.post('/auth/authenticate', authController.authenticate, authMiddleware);

/* GerenteController */

//Lista produtos
routes.get('/admin', gerenteController.listProducts, authMiddleware);

//Procura um produto
routes.get('/admin/:productId', gerenteController.queryProduct, authMiddleware);

// Adicionar produtos
routes.post('/admin', gerenteController.addProduct, authMiddleware);

//Editar um produto
routes.put('/admin/:productId', gerenteController.editProduct, authMiddleware);
    
//deletar um produto
routes.delete('/admin/:productId', gerenteController.deleteProduct, authMiddleware);

/* normalUserController */

//Lista produtos
routes.get('/user', normalUserController.listProducts, authMiddleware);

//Procura um produto
routes.get('/user/:productId', normalUserController.queryProduct, authMiddleware);


module.exports = routes;