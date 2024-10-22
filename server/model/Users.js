const mongoose = require('mongoose');

const UsersModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: Number
        },
        "firstName": {
            require: true,
            type: String
        },
        "lastName": {
            require: true,
            type: String
        },
        "contact": {
            require: true,
            type: String
        },
        "dateOfBirth": {
            require: true,
            type: String
        },
        "address": {
            require: true,
            type: String
        },
        "nic": {
            require: true,
            type: String
        },
        "country": {
            require: true,
            type: String
        },
        "email": {
            require: true,
            type: String
        },
        "userName": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "password": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const Users = mongoose.model('User', UsersModel);

module.exports = Users;
