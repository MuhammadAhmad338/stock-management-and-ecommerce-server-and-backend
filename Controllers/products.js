const Product = require("../Model/productModel");
const sizes = require("../sizes.json");
const { uploadImages, uploadImage } = require("../Helper/uploadImages");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json('Some Error Occured');
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await Product.findById(_id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json('Some error occured!');
    }
}

const addProduct = async (req, res) => {
    try {
        const imagesArray = [];
        const data = req.body;
        const image = await uploadImage(data.thumbnail);
        const images = await uploadImages(data.images);
        for (let i = 0; i < images.length; i++) {
            imagesArray.push(images[i]);
        }
        const product = Product({ ...data, sizes, thumbnail: image, images: imagesArray });
        await product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(_id);
        res.status(200).json(`Product Deleted Successfully ${deletedProduct}`);
    } catch (error) {
        res.status(500).json(error);
    }
}

const searchProduct = async (req, res) => {
    try {
        const query = req.query.title;
        const searchProduct = await Product.aggregate([{
            $match:
            {
                $or: [
                    { title: { $regex: query, $options: "i" } },
                ]
            }
        }]);
        res.status(200).json(searchProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, subtitle, description } = req.body;
        
        // Use findByIdAndUpdate to update the user in the database.
        const updatedProduct = await Product.findByIdAndUpdate(
            id, { title, subtitle, description },
        );
        if (!updatedProduct) {
            res.status(404).json({ error: "User not found" });
        }
      
        res.status(200).json({message: "Product updated successfully!", data: updatedProduct});
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllProducts, addProduct, getSingleProduct, searchProduct, deleteProduct, updateProduct }
