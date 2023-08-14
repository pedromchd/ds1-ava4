const Sequelize = require('sequelize');

const sequelize = new Sequelize('ds1_ava4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize,
    sequelize
};
