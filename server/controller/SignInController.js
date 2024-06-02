const Users = require("../model/Users");
const bcrypt = require('bcryptjs');

const SignInController = {
    login: async function (req, res, next) {

        const { userName, password } = req.body;

        try {
            const user = await Users.findOne({ userName,password });
            if (!user) {
                return res.status(400).json({ message: 'Invalid username or password.' });
            }

            res.json({ message: 'Login successful' });
        } catch (error) {
            console.error('Error during login:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
}

module.exports = SignInController;
