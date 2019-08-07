const express = require('express');
const Sequelize = require('sequelize');
const routes =  require('./app/routes')

//iniciando o ap
const app = express();


// import models
const { sequelize } = require('./app/models');

app.use(express.json());
app.use(routes);

//startando node:
app.listen(3001);
