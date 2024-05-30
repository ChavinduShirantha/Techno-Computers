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
    },

    getAllProducts: async function (req, res, next) {
        try {
            const productList = await Products.find();
            res.status(200).json(productList);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    deleteProductsDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const result = await Products.findOneAndDelete({id: id});
            if (result.deletedCount === 0) {
                res.status(404).json({error: 'Product Not Found'});
            }
            res.status(200).json('Product Delete Successfully')
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    }

}

module.exports = ProductsController;
