const Category = require("../Model/categoryModel");

const getByCategory = async (req, res) => {
    try {
        const name = req.params.id;
        console.log(name);
        const categoryProducts = await Category.find({ name });
        res.status(200).json(categoryProducts);
    } catch(error) {
        res.status(500).json(error);
    }
}

const addCategory = async (req, res) => {
    try {
        const data = req.body;
        const category = await Category({ ...data });
        await category.save();
        res.status(200).json(category);
    } catch(error) {
        res.status(500).json(error);
    }
}

module.exports = {addCategory, getByCategory};