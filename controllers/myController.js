const { sequelize, Sequelize } = require('../config/database');
const Empregado = require('../models/Empregado')(sequelize, Sequelize);

exports.add = (req, res) => {
    res.render('myform');
};

exports.create = (req, res) => {
    const data = {
        nome: req.body.nome,
        salario_bruto: req.body.salario_bruto,
        departamento: req.body.departamento
    }
    Empregado.create(data);
    res.redirect('/show');
};

exports.show = async (req, res) => {
    results = await Empregado.findAll({
        order: [['id', 'ASC']]
    });
    res.render('myresult', { results: results });
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    const result = await Empregado.findByPk(id);
    res.render('myformedit', { id: id, result: result });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const data = {
        nome: req.body.nome,
        salario_bruto: req.body.salario_bruto,
        departamento: req.body.departamento
    }
    Empregado.update(data, { where: { id: id } });
    res.redirect('/show');
};

exports.delete = (req, res) => {
    const id = req.params.id;
    Empregado.destroy({ where: { id: id } });
    res.redirect('/show');
};
