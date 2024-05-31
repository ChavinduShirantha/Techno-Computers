const Orders = require("../model/Orders");

const OrdersController = {
    saveOrderDetails: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const orders = await Orders.create(requestedData);

            res.status(200).json("User Added Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }

}

module.exports = OrdersController;
