var jwt = require('jsonwebtoken');
var config = require('../config/config');
const router = require('express').Router();

//Route to get token. No username or password required to get token 
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