const Products = require("../model/Products");

const ProductsController ={
    saveProductsDetails: async function (req, res, next) {
        try {
            const requestedData = req.body;

            const product = await Products.create(requestedData);

            res.status(200).json("Product Added Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }
}

module.exports = ProductsController;
