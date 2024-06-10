const express = require('express');
const OrdersController = require('../controller/OrderController');
const router = express.Router();


router.post('/save', OrdersController.saveOrders);

router.get('/all', OrdersController.getAllOrderDetails);

router.get('/find/:id', OrdersController.searchOrderDetail);

router.get('/getLastId',OrdersController.getLastID)

router.get('/orderCount', OrdersController.getOrderCount);

module.exports =router;
