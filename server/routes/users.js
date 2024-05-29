const express = require('express');
const UsersController = require('../controller/UsersController');
const router = express.Router();


router.post('/save', UsersController.saveUserDetails);

router.get('/all', UsersController.getAllUsers);

router.get('/find/:id',UsersController.searchUser);

router.delete('/delete/:id',UsersController.deleteUserDetail);


module.exports =router;
