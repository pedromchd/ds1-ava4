module.exports = (sequelize, DataTypes) => {
    const Livros = sequelize.define('Livros', {
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
    }, {
        timestamps: false
    });

    return Livros;
};
