const express = require('express');
const routes = express.Router();

const DevsController = require('./controllers/DevsController');

//Create
routes.post('/devs', DevsController.store);

// View listagem
routes.get("/devs", DevsController.index);

// getById
//routes.get('/devs/:devId', DevsController.getDevsById);

module.exports = routes;