const express = require('express');
const UsersController = require('../controller/UsersController');
const router = express.Router();


router.post('/save', UsersController.saveUserDetails);

module.exports =router;
