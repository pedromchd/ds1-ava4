module.exports = (sequelize, DataTypes) => {
    const Empregados = sequelize.define('Empregados', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING
        },
        salario_bruto: {
            type: DataTypes.DECIMAL(10, 2)
        },
        departamento: {
            type: DataTypes.ENUM('1', '2', '3', '4')
        }
    }, {
        timestamps: false
    });

    return Empregados;
};
