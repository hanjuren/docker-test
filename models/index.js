const Sequelize = require('sequelize');

const env = 'development';
const config = require('../config/config.json')[env];
console.log(config)
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

module.exports = db;