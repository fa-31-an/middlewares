const router = require('express').Router();

const { index } = require('../controllers/mainController.js');

router
    .get('/', index)

module.exports = router;