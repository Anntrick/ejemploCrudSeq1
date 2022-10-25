const config = require('../config/config');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password,
    {
        dialect: config.development.dialect,
        host: config.development.host,        
        port: config.development.port || '3307',
    }
);

module.exports = sequelize