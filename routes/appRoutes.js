const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const myController = require('../controllers/myController');

// Validator middleware
const validatorForm = [
    check('title').isLength({ min: 5 }).withMessage('This title is too short')
];

// Routes
router.get('/', validatorForm, myController.add);
router.post('/', validatorForm, myController.create);
router.get('/show', myController.show);
router.get('/edit/:id', myController.edit);
router.post('/edit/:id', myController.update);
router.get('/delete/:id', myController.delete);

module.exports = router;
