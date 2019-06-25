const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Dog = require('../database/index.js');
const port = 3000;

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api', (req, res)=> Dog.getUserInfo(req, res));

app.post('/api', (req, res) => Dog.createUser(req, res));
app.put('/api/:id', (req, res) => Dog.updateUser(req, res))
app.listen(port, () => console.log(`listening on port ${port}`))