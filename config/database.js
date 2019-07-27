const Sequelize = require('sequelize');

const config = require('./config');

var pg = require('pg');
pg.defaults.ssl = true;

module.exports =  new Sequelize(config.connectionString);