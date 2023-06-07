const Router = require('express');

const { createProduct, getProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');

const router = Router();

router.post("/create", createProduct);

router.get("/", getProducts);

router.get("/:productId", getProduct);

router.put("/:productId", updateProduct);

router.delete("/:productId", deleteProduct);

module.exports = router;