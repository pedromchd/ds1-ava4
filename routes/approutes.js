const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
var myController = require('../controllers/mycontroller');

let validatorForm = [
    check('title').isLength({ min: 5 }).withMessage('This title is too short')
];

router.get('/', validatorForm, myController.showForm);
router.post('/', validatorForm, myController.save);
router.get('/show', myController.showResult);
router.get('/delete/:id', myController.delete);
router.get('/edit/:id', myController.edit);
router.post('/edit/:id', myController.update);

module.exports = router;
