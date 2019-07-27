const express = require('express');

const router = express.Router();

const { Client } = require('pg');

const config = require('../config/config');

const client = new Client({
  connectionString: config.connectionString,
  ssl: true,
});

client.connect();

router.get('/ifsc/:ifsccode', (req, res)=> {

    let ifscCode = req.params.ifsccode;

    let result;

    client.query('select row_to_json(row(ifsc, bank_id, branch, address, city, district, state, bank_name)) from bankdetails LIMIT 10', (err, res) => {
        if (err) throw err;
        for (let row of res.rows) {
            console.log(JSON.stringify(row));
          }
        result = JSON.parse(res.rows);
      });
    res.send(result);
    res.end();
    
 // SQL query goes here!
});

router.get('/city', (req, res) => {
    // SQL query goes here!
});

module.exports = router;