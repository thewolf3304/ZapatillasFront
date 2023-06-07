const Product = require('../models/Product')

module.exports = {
    createProduct: async (req, res) => {
        const product = new Product();
        product.name = req.body.name;
        product.description = req.body.description;
        product.categoria = req.body.categoria;
        product.image = req.body.image;
        
        try {
          const productSaved = await product.save();
          res.status(201).json(productSaved);
        } catch (error) {
          res.status(500).json({ error: 'Producto no guardado' });
        }
    },
    getProducts: async(req, res) =>{
        const products = await Product.find();
        res.status(200).json(products);
    },
    getProduct: async(req, res) => {
        const id = req.params.productId
        const product = await Product.findById(id);
        res.status(200).json(product);
    },
    updateProduct: async(req, res) => {
        try {
            const updateProduct = await Product.findByIdAndUpdate(
                req.params.productId,
                req.body,
                { new: true }
            );

            res.status(200).json(updateProduct);
        } catch (error) {
            res.status(500).json({ error: 'Producto no actualizado' });
        }
    },
    deleteProduct: async(req, res) => {
        const { productId } = req.params;
        await Product.findByIdAndDelete(productId);
        res.status(204).json();
    },
}