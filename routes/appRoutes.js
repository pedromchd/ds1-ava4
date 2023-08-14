const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const myController = require('../controllers/myController');

// Validator middleware
const validatorForm = [
    check('title').isLength({ min: 5 }).withMessage('This title is too short')
];

// Routes
router.get('/', validatorForm, myController.showForm);
router.post('/', validatorForm, myController.save);
router.get('/show', myController.showResult);
router.get('/delete/:id', myController.delete);
router.get('/edit/:id', myController.edit);
router.post('/edit/:id', myController.update);

module.exports = router;
