var jwt = require('jsonwebtoken');
var config = require('../config/config');

// Middleware to check the validity of the token
module.exports = function(req, res, next) {
    if( req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization') ) {
        try {
            req.user = jwt.verify(req.headers.authorization, config.JWT_SECRET_KEY);
        } catch(err) {
            return res.status(401).json({
                error: {
                    msg: 'Failed to authenticate token!'
                }
            });
        }
    } else {
        return res.status(401).json({
            error: {
                msg: 'No token found'
            }
        });
    }
    next();
    return;
};