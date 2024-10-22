const Products = require("../model/Products");
const Users = require("../model/Users");

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
    },

    searchProductsDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const product = await Products.find({id: id});

            res.status(200).json(product);

        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    updateProductsDetail: async function (req, res, next) {
        try {
            const id = req.params.id;
            const productData = req.body;
            const updatedProduct = await Products.findOneAndUpdate({
                id: id
            }, productData, {new: true});

            if (!updatedProduct) {
                return res.status(404).json({error: 'Product Not Found'});
            }

            res.status(200).json("Product Updated Successfully!");
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getProductCount:async function (req,res,next) {
        try{
            const productCount = await Products.find(req.params.id).countDocuments();
            console.log('Product Count:', productCount);
            res.status(200).json(productCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getInStockProductCount:async function (req,res,next) {
        try{
            const productCount = await Products.find({productState:'in_stock'}).countDocuments();
            console.log('Product Count:', productCount);
            res.status(200).json(productCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getOutOfStockProductCount:async function (req,res,next) {
        try{
            const productCount = await Products.find({productState:'out_of_stock'}).countDocuments();
            console.log('Product Count:', productCount);
            res.status(200).json(productCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getNewArrivalsProductCount:async function (req,res,next) {
        try{
            const productCount = await Products.find({productState:'new_arrivals'}).countDocuments();
            console.log('Product Count:', productCount);
            res.status(200).json(productCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getComingSoonProductCount:async function (req,res,next) {
        try{
            const productCount = await Products.find({productState:'coming_soon'}).countDocuments();
            console.log('Product Count:', productCount);
            res.status(200).json(productCount);
        }catch (error) {
            console.error(error);
            res.status(500).json({error: 'Something went wrong'})
        }
    },

    getLastID:async function (req,res,next) {
        try {
            const lastProduct = await Products.findOne().sort({ id: -1 }).lean();
            const lastId = lastProduct ? lastProduct.id + 1 : + 1;
            res.status(200).json({ id: lastId });
        } catch (error) {
            console.error("Error fetching last ID:", error);
            res.status(500).json({
                error: "Server Error: Unable to fetch last ID",
            });
        }
    }

}

module.exports = ProductsController;
