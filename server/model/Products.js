const mongoose = require('mongoose');

const ProductsModel = mongoose.Schema(
    {
        "id":{
            require: true,
            type: String,
        },
        "description": {
            require: true,
            type: String
        },
        "name": {
            require: true,
            type: String
        },
        "price": {
            require: true,
            type: Number
        },
        "currency": {
            require: true,
            type: String
        },
        "image": {
            require: true,
            type: String
        },
        "productState": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const Products = mongoose.model('Products', ProductsModel);

module.exports = Products;
