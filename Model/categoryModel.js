const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: Array
    }
}, {
    timestamps: true
  });

const Category = categorySchema.model('Categories', categorySchema);

module.exports = Category;