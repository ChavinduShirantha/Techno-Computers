const Orders = require("../model/Orders");

const OrdersController = {
    saveOrders: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const orders = await Orders.create(requestedData);

            res.status(200).json("Order Purchased Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getLastID: async function (req, res, next) {
        try {
            const lastOrder = await Orders.findOne().sort({id: -1}).lean();
            const lastId = lastOrder ? lastOrder.id + 1 : +1;
            res.status(200).json({id: lastId});
        } catch (error) {
            console.error("Error fetching last ID:", error);
            res.status(500).json({
                error: "Server Error: Unable to fetch last ID",
            });
        }
    },

    getAllOrderDetails: async function (req, res, next) {
        try {
            const productList = await Orders.find();
            res.status(200).json(productList);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    searchOrderDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const product = await Orders.find({id: id});

            res.status(200).json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getOrderCount: async function (req, res, next) {
        try {
            const orderCount = await Orders.find(req.params.id).countDocuments();
            console.log('User Count:', orderCount);
            res.status(200).json(orderCount);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }

}

module.exports = OrdersController;
