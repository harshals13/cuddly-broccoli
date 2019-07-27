const express = require('express');
const router = express.Router();
const config = require('../config/config');
const db = require('../config/database');
const Bank = require('../models/bank');


router.get('/ifsc/:ifsccode', (req, res)=> {

    // SQL query goes here!
    let ifscCode = req.params.ifsccode;

    let limit = req.params.limit;

    let offset = req.params.offset;

    Bank.findAll({
        attributes: ['ifsc', 'bank_id', 'state', 'district', 'bank_name', 'city', 'address', 'branch'],
        limit: limit,
        offset: offset,
        where: {
            ifsc: ifscCode
          }
    })
    .then(banks => {
        console.log(banks)
        res.send(banks)
    })
    .catch(err => console.log(err));
    
});

router.get('/city/', (req, res) => {
    // SQL query goes here!
});

module.exports = router;