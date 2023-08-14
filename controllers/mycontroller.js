const { sequelize, Sequelize } = require('../config/database');

const livrosModel = require('../models/livros')(sequelize, Sequelize);

exports.showForm = (req, res) => {
    res.render('myform', { layout: false });
}

exports.edit = (req, res) => {
    const id_param = req.params.id;
    livrosModel.findByPK(id_param).then(results => {
        res.render('myformedit', { layout: false, id: id_param, resultado: results });
    }).catch(err => {
        console.log('Error' + err);
        res.status(500).send({ message: 'Error' + err.message });
    });
}

exports.update = (req, res) => {
    const id_param = req.params.id;
    console.log('UPDATE: ' + id_param);
    livrosModel.update({
        title: req.body.title,
        description: req.body.description
    }, { where: { id: id_param } }).then(result => {
        if (!result) {
            req.status(400).send({
                message: 'An error ocurred when trying to update this object.'
            });
        }
        res.redirect('/show');
    }).catch(err => {
        res.status(500).send({
            message: 'Erorr updating.'
        });
    });
}

exports.save = (req, res) => {
    const bookSetData = {
        title: req.body.title,
        description: req.body.description
    };
    livrosModel.create(bookSetData).then(data => {
        console.log('Data saved');
        res.redirect('/');
    }).catch(err => {
        console.log('Error' + err);
    });
}

exports.delete = (req, res) => {
    console.log('Elemento' + req.params.id);
    const id_param = req.params.id;
    livrosModel.destroy({
        where: { id: id_param }
    }).then(result => {
        if (!result) {
            req.status(400).send({
                message: 'An error ocurred.'
            });
        }
        res.redirect('/show');
    }).catch(err => {
        res.status(500).send({
            message: 'Could not delete object.'
        });
    });
}

exports.showResult = (req, res) => {
    livrosModel.findAll({
        order: [['title', 'ASC']]
    }).then(results => {
        //console.log('results'+results.json)
        res.render('myresult', { resultado: results });
    }).catch(err => {
        console.log('Error' + err);
        res.status(500).send({ message: 'Error' + err.message });
    });
}
