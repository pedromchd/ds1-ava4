const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    database: 'ds1_ava4',
    username: 'root',
    password: '',
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize,
    sequelize
};
