const { sequelize, Sequelize } = require('../config/database');
const Empregado = require('../models/Empregado')(sequelize, Sequelize);

exports.add = (req, res) => {
    res.render('myform');
};

exports.create = async (req, res) => {
    const { nome, salario_bruto, departamento } = req.body;
    try {
        await Empregado.create({ nome, salario_bruto, departamento });
        res.redirect('/show');
    } catch (error) {
        console.error('Error creating employee:', error);
        res.redirect('/show');
    }
};

exports.show = async (req, res) => {
    try {
        const results = await Empregado.findAll({
            order: [['id', 'ASC']]
        });
        res.render('myresult', { results });
    } catch (error) {
        console.error('Error fetching employees:', error);
        res.redirect('/');
    }
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Empregado.findByPk(id);
        res.render('myformedit', { id, result });
    } catch (error) {
        console.error('Error editing employee:', error);
        res.redirect('/show');
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    const { nome, salario_bruto, departamento } = req.body;
    try {
        await Empregado.update({ nome, salario_bruto, departamento }, { where: { id } });
        res.redirect('/show');
    } catch (error) {
        console.error('Error updating employee:', error);
        res.redirect('/show');
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await Empregado.destroy({ where: { id } });
        res.redirect('/show');
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.redirect('/show');
    }
};
