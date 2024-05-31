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
    },

    deleteUserDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const result = await Users.findOneAndDelete({id: id});
            if (result.deletedCount === 0) {
                res.status(404).json({error: 'User Not Found'});
            }
            res.status(200).json('User Delete Successfully')
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    updateUserDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const userData = req.body;
            const updatedUser = await Users.findOneAndUpdate({
                id: id
            }, userData, {new: true});

            if (!updatedUser) {
                return res.status(404).json({error: 'User Not Found'});
            }

            res.status(200).json("User Updated Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getUserCount:async function (req,res,next) {
        try{
            const userCount = await Users.find(req.params.id).countDocuments();
            console.log('User Count:', userCount);
            res.status(200).json(userCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }

}

module.exports = UsersController;
