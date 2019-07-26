var express = require('express');

var pg = require('pg');

var bodyParser = require('body-parser');

var app = express();

var { Client } = require('pg');

const config = require('./config/config');

var router = express.Router();


// Using Bodyparser
app.use(bodyParser.json());

  const client = new Client({
    user: config.client.user,
    host: config.client.host,
    database: config.client.database,
    password: config.client.password,
    port: config.client.port
  });

  client.connect()
  .then(() => console.log("Connected Successfully"))
  .catch( e => console.log(e))
  .finally(() => client.end());


  // API to check if server is active
  app.get('/ping', function(req, res) {
      res.send("Hello, there!");
      console.log("Hello, there!");
  });

  app.use('/api/v1', require('./middleware/authService'));

  app.use('/api/v1', require('./controllers/bankdetails'), (router));

  app.use('/', require('./controllers/user'));

  module.exports = app;