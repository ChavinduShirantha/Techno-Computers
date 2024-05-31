const express = require('express');
const OrdersController = require('../controller/OrderController');
const router = express.Router();


router.post('/save', OrdersController.saveOrderDetails);


module.exports =router;
