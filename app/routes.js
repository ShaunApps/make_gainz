const express = require('express');
const router = express.Router();
const mainControlller = require('./controllers/main.controller');

module.exports = router;


router.get('/', mainControlller.showHome);
