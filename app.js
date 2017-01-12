const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');
const setupController = require('./app/controllers/setupController');

const port = process.env.PORT || 3000;


app.use(require('./app/routes'));


app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})




mongoose.connect(config.getDbConnectionString());
setupController(app);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});
