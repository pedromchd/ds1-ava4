const { sequelize, Sequelize } = require('../config/database');
const Empregado = require('../models/Empregado')(sequelize, Sequelize);

exports.add = (req, res) => {
    res.render('myform');
};

exports.create = async (req, res) => {
    const data = {
        nome: req.body.nome,
        salario_bruto: req.body.salario_bruto,
        departamento: req.body.departamento
    }
    await Empregado.create(data);
    res.redirect('/show');
};

exports.show = async (req, res) => {
    const results = await Empregado.findAll({
        order: [['id', 'ASC']]
    });
    res.render('myresult', { results: results });
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    const result = await Empregado.findByPk(id);
    res.render('myformedit', { id: id, result: result });
};

exports.update = async (req, res) => {
    const id = req.params.id;
    const data = {
        nome: req.body.nome,
        salario_bruto: req.body.salario_bruto,
        departamento: req.body.departamento
    }
    await Empregado.update(data, { where: { id: id } });
    res.redirect('/show');
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    await Empregado.destroy({ where: { id: id } });
    res.redirect('/show');
};
