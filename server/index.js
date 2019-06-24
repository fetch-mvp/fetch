const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Dog = require('../database/index.js');

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', Dog.getUserInfo(req, res));

app.post('/api', Dog.createUser(req, res));
