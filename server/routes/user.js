const express = require('express');
const router = express.Router();
const controller = require('../controllers/user')

/* GET links listing. */
router.get('/logout', controller.logout);
router.post('/login', controller.login);
router.get('/verification', controller.verification);


module.exports = router;
