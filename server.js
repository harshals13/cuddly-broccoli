var express = require('express');

var pg = require('pg');

var bodyParser = require('body-parser');

var app = express();

var { Client } = require('pg');

const config = require('./config/config');

var router = express.Router();

const db = require('./config/database');

// Authenticating the database
db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log('Error:' + err));


// Using Bodyparser
app.use(bodyParser.json());

  // API to check if server is active
  app.get('/ping', function(req, res) {
      res.send("Hello, there!");
      console.log("Hello, there!");
  });

  // To authenticate with token
  app.use('/api/v1', require('./middleware/authService'));

  // Controller for bank related API
  app.use('/api/v1/bank/search', require('./controllers/bankdetails'), (router));

  // Controller to get authentication token
  app.use('/', require('./controllers/user'));

  module.exports = app;