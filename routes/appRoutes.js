const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController');

// Routes
router.get('/', myController.add);
router.post('/', myController.create);
router.get('/show', myController.show);
router.post('/show', myController.search);
router.get('/edit/:id', myController.edit);
router.post('/edit/:id', myController.update);
router.get('/delete/:id', myController.delete);

module.exports = router;
