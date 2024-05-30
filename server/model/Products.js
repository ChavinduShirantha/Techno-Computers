const mongoose = require('mongoose');

const ProductsModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: String,
            unique: true,
            index: true
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
            type: String
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
