const { sequelize, Sequelize } = require('../config/database');
const Empregado = require('../models/Empregado')(sequelize, Sequelize);

exports.add = (req, res) => {
    res.render('myform');
};

exports.create = async (req, res) => {
    const { nome, salario_bruto, departamento } = req.body;
    await Empregado.create({ nome, salario_bruto, departamento });
    res.redirect('/show');
};

exports.show = async (req, res) => {
    const query = req.query.q ?? '';
    let [order, by] = ['id', 'ASC'];
    if (req.query.order) {
        if (req.query.order == 'count') {
            res.redirect('/show/empregados-por-departamento');
        } else {
            [order, by] = req.query.order.split('-');
        }
    }
    const results = await Empregado.findAll({
        where: { nome: { [Sequelize.Op.substring]: query } },
        order: [[order, by]]
    });
    res.render('myresult', { query, results });
};

exports.countDepto = async (req, res) => {
    const [results, metadata] = await sequelize.query('SELECT `departamento`, COUNT(`departamento`) AS `no_deptos` FROM `Empregados` AS `Empregados` GROUP BY `departamento`');
    res.render('countdepto', { results });
};

exports.edit = async (req, res) => {
    const id = req.params.id;
    const result = await Empregado.findByPk(id);
    res.render('myformedit', { id, result });
};

exports.update = async (req, res) => {
    const id = req.params.id;
    const { nome, salario_bruto, departamento } = req.body;
    await Empregado.update({ nome, salario_bruto, departamento }, { where: { id } });
    res.redirect('/show');
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    await Empregado.destroy({ where: { id } });
    res.redirect('/show');
};
