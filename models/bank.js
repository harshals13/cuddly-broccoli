const Sequelize = require('sequelize');
const db = require('../config/database');

const Bank = db.define('bankdetails', {
    ifsc: {
        type: Sequelize.STRING
    },
    bank_id: {
        type: Sequelize.STRING
    },
    branch:{
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING(500)
    },
    city: {
        type: Sequelize.STRING
    },
    district: {
        type: Sequelize.STRING
    },
    state: {
        type: Sequelize.STRING
    },
    bank_name: {
        type: Sequelize.STRING
    }
});

module.exports = Bank;