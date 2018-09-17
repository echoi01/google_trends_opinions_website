const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scraperController = require('./scraper');
const app = express();

// Database connection
const MONGO_URL = 'mongodb://user1:hunter2@ds257838.mlab.com:57838/opinion8';

const app = express();

app.use(bodyPerser.son());
app.use(express.static(__dirname + './../'));

// routes

app.listen(1233, () => {
    console.log('listening on port 1233');
})


module.exports = app;