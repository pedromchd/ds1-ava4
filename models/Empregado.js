const { calcularSalarioLiquido } = require('../calcularSalarioLiquido');

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
        salario_liquido: {
            type: DataTypes.VIRTUAL,
            get() {
                return calcularSalarioLiquido(this.salario_bruto);
            }
        },
        departamento: {
            type: DataTypes.ENUM('1', '2', '3', '4'),
            get() {
                const depto = [
                    { cod: '1', nome: 'Administrativo' },
                    { cod: '2', nome: 'Designer' },
                    { cod: '3', nome: 'Contabilidade' },
                    { cod: '4', nome: 'Fábrica' },
                ];
                return depto[this.getDataValue('departamento') - 1];
            }
        }
    }, {
        timestamps: false
    });

    return Empregados;
};
