const Users = require("../model/Users");

const UsersController = {
    saveUserDetails: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const users = await Users.create(requestedData);

            res.status(200).json("User Added Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getAllUsers: async function (req, res, next) {
        try {
            const userList = await Users.find();
            res.status(200).json(userList);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    searchUser: async function (req, res, next) {
        try {
            const id = req.params.id;
            const product = await Users.find({id: id});

            res.status(200).json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}

module.exports = UsersController;
