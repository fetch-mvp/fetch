const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Dog = require('../database/index.js');
const port = 3000;

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res) => Dog.getAll(req, res));

app.get('/api/user', (req, res) => Dog.getUserInfo(req, res));

app.get('/api/:_id', (req, res) => Dog.getUserInfoID(req, res));

app.post('/api', (req, res) => Dog.createUser(req, res));
app.put('/api/:_id', (req, res) => Dog.updateUser(req, res));
app.listen(port, () => console.log(`listening on port ${port}`));
