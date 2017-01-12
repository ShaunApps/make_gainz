const express = require('express');
const app = express();
const config = require('./config');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;



app.listen(port, function () {
  console.log('Example app listening on port 3000!')
})

// test code

// app.get('/', function(req, res) {
//    res.send("hellow");
// })

mongoose.connect(config.getDbConnectionString());

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected")
});
