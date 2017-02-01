const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const exercises = require('./routes/exercises'); //routes are defined here
const app = express(); //Create the Express app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', exercises); //This is our route middleware

module.exports = app;
