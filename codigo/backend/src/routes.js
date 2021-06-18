const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express.Router();

// =---==--=-=-==--=-= Usuários
routes.get('/getAllUsers', UserController.index);
routes.post('/insertUser', UserController.store);
routes.post('/getOneUser', UserController.getOne);


module.exports = routes;