const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const scraperController = require('./scraper');
const app = express();

// Database Schema
const opinionSchema = require('');

// Database connection
const MONGO_URL = 'mongodb://user1:hunter2@ds257838.mlab.com:57838/opinion8';

const app = express();

app.use(bodyPerser.son());
app.use(express.static(__dirname + './../'));

// ROUTES

// Route to grab topics via scrape
app.get('/get_topics', scraperController.getData);
// Route to post opinion into database
app.post('/postOpition', (req, res) => {
    Opinion.create
})


app.listen(1233, () => {
    console.log('listening on port 1233');
})


module.exports = app;