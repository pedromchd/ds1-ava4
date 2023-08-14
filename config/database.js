const Sequelize = require('sequelize');

const sequelize = new Sequelize('AulaLivros', 'root', 'mysqluser', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Sequelize,
    sequelize
};
