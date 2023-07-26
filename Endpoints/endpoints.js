const { getAllProducts, addProduct,  searchProduct,
    getSingleProduct, deleteProduct, updateProduct } = require("../Controllers/products");
const express = require("express");

const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/getProduct/:id", getSingleProduct);
router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/searchProduct", searchProduct);
router.put('/updateProduct/:id', updateProduct);

module.exports = router;