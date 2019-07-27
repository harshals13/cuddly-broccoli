const express = require('express');
const router = express.Router();
const config = require('../config/config');
const db = require('../config/database');
const Bank = require('../models/bank');


router.get('/ifsc/:ifsccode', (req, res)=> {

    // SQL query goes here!
    let ifscCode = req.params.ifsccode;

    let limit = req.query.limit;

    let offset = req.query.offset;

    Bank.findAll({
        attributes: ['ifsc', 'bank_id', 'state', 'district', 'bank_name', 'city', 'address', 'branch'],
        limit: limit,
        offset: offset,
        where: {
            ifsc: ifscCode.toUpperCase()
          }
    })
    .then(banks => {
        res.send(banks);
    })
    .catch(err => console.log(err));
    
});

router.get('/city/:cityname/bank/:bankname/', (req, res) => {
    // SQL query goes here!
    let cityName = req.params.cityname;

    let bankName = req.params.bankname;

    let limit = req.query.limit;

    let offset = req.query.offset;

    Bank.findAll({
        attributes: ['ifsc', 'bank_id', 'state', 'district', 'bank_name', 'city', 'address', 'branch'],
        limit: limit,
        offset: offset,
        where: {
            city: cityName.toUpperCase(),
            bank_name: bankName.toUpperCase()
          } 
    })
    .then(banks => {
        res.send(banks)
    })
    .catch(err => console.log(err));
});

module.exports = router;