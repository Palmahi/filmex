const Sequelize = require('sequelize');
const dbname = 'Filmex';
const db = new Sequelize(`postgres://localhost:5432/${dbname}`, {logging: false});


module.exports = db;