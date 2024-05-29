var express = require('express');
var router = express.Router();

const {productsList} = require('../constants/constants');

const ProductsController = require("../controller/ProductsController");

router.get('/all', function(req, res, next) {
    res.send(productsList);
});

router.post('/save', ProductsController.saveProductsDetails);

module.exports = router;
