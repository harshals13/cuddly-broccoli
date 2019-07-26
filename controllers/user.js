var jwt = require('jsonwebtoken');
var config = require('../config/config');
const router = require('express').Router();


    router.get('/login', function(req, res) {
        
        res.json({
            id: 1,
            username: 'admin',
            jwt: jwt.sign({
                id: 1,
            }, config.JWT_SECRET_KEY, { expiresIn: "5d" })
        });
    });
    module.exports = router;