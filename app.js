const express = require('express');

const pg = require('pg');

const bodyParser = require('body-parser');

const app = express();

const { Pool, Client } = require('pg');

// DB Connect string
const connectionString ="postgres://postgres:password@localhost/practice";

const pool = new Pool({
    connectionString: connectionString,
  })
  pool.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    pool.end()
  })
  const client = new Client({
    connectionString: connectionString,
  })
  client.connect()
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })

app.use(bodyParser.json());

app.get('/ping', function(req, res) {
    res.send("Hello, there!")
    console.log("Hello, there!")
})

app.listen(3000, function() {
    console.log("Server Started");
})