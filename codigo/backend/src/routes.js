const express = require('express');

const UserController = require('./controllers/UserController');
const ServicoController = require('./controllers/ServicoController');

const routes = express.Router();
// =---==--=-=-==--=-= Usuários
routes.get('/getAllUsers', UserController.index);
routes.post('/insertUser', UserController.store);
routes.post('/getOneUser', UserController.getOne);

// =---==--=-=-==--=-= Usuários
routes.post('/insertService', ServicoController.store);
routes.post('/getService', ServicoController.getService);

module.exports = routes;