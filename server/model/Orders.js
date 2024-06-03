const mongoose = require('mongoose');

const OrdersModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: Number,
            unique: true,
            index: true
        },
        "oDate": {
            require: true,
            type: String
        },
        "totalItems": {
            require: true,
            type: String
        },
        "total": {
            require: true,
            type: String
        },
        "cusId": {
            require: true,
            type: String
        },
        "cusName": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const Orders = mongoose.model('Orders', OrdersModel);

module.exports = Orders;
