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
            },
            set(value) {
                throw new Error('Do not try to set the `salario_liquido` value!');
            }
        },
        departamento: {
            type: DataTypes.ENUM('1', '2', '3', '4')
        }
    }, {
        timestamps: false,
        getterMethods: {
            nomeDepartamento() {
                const departamentos = [
                    'Administrativo',
                    'Designer',
                    'Contabilidade',
                    'Fábrica'
                ];
                return departamentos.at(parseInt(this.departamento) - 1);
            }
        }
    });

    return Empregados;
};
