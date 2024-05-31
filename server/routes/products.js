var express = require('express');
var router = express.Router();

const {productsList} = require('../constants/constants');

const ProductsController = require("../controller/ProductsController");

/*router.get('/all', function(req, res, next) {
    res.send(productsList);
});*/

router.post('/save', ProductsController.saveProductsDetails);

router.get('/all', ProductsController.getAllProducts);

router.delete('/delete/:id',ProductsController.deleteProductsDetail);

router.get('/find/:id',ProductsController.searchProductsDetail);

router.put('/update/:id',ProductsController.updateProductsDetail);

router.get('/productCount', ProductsController.getProductCount);


module.exports = router;
