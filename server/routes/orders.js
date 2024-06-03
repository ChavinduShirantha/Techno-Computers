const express = require('express');
const OrdersController = require('../controller/OrderController');
const router = express.Router();


router.post('/save', OrdersController.saveOrderDetails);

router.get('/getLastId',OrdersController.getLastID)


module.exports =router;
