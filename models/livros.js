const { sequelize } = require('../config/database');

module.exports = (sequelize, DataTypes) => {
    var Livros = sequelize.define('livros', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        }
    }, { timestamps: false });
    return Livros;
}
