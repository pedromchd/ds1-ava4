const { validationResult } = require('express-validator');
const { sequelize, Sequelize } = require('../config/database');
const livrosModel = require('../models/Livro')(sequelize, Sequelize);

exports.showForm = (req, res) => {
  res.render('myform', { layout: false });
};

exports.edit = (req, res) => {
  const id_param = req.params.id;
  livrosModel.findByPk(id_param)
    .then(results => {
      res.render('myformedit', { layout: false, id: id_param, resultado: results });
    })
    .catch(err => {
      console.log('Error: ' + err);
      res.status(500).send({ message: 'Error: ' + err.message });
    });
};

exports.update = (req, res) => {
  const id_param = req.params.id;
  livrosModel.update(
    {
      title: req.body.title,
      description: req.body.description
    },
    { where: { id: id_param } }
  )
    .then(result => {
      if (!result) {
        res.status(400).send({ message: 'An error occurred when trying to update this object.' });
      }
      res.redirect('/show');
    })
    .catch(err => {
      res.status(500).send({ message: 'Error updating.' });
    });
};

exports.save = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.session.errors = errors.array();
    return res.redirect('/');
  }

  const bookSetData = {
    title: req.body.title,
    description: req.body.description
  };

  livrosModel.create(bookSetData)
    .then(data => {
      console.log('Data saved');
      req.flash('success_msg', 'Data saved successfully.');
      req.session.errors = null;
      res.redirect('/');
    })
    .catch(err => {
      console.log('Error: ' + err);
    });
};

exports.delete = (req, res) => {
  const id_param = req.params.id;
  livrosModel.destroy({ where: { id: id_param } })
    .then(result => {
      if (!result) {
        res.status(400).json({ message: 'An error occurred.' });
      }
      res.redirect('/show');
    })
    .catch(err => {
      res.status(500).json({ message: 'Could not delete object.' });
      console.log(err);
    });
};

exports.showResult = (req, res) => {
  livrosModel.findAll({
    order: [['title', 'ASC']]
  })
    .then(results => {
      res.render('myresult', { resultado: results });
    })
    .catch(err => {
      console.log('Error: ' + err);
      res.status(500).send({ message: 'Error: ' + err.message });
    });
};
