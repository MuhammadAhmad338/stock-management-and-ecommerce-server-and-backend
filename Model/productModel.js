const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    original_price: {
         type: Number
    },
    description: {
        type: String,
        required: true
    },
    sizes: {
        type: Object
    },
    images: {
        type: Array
    },
    thumbnail: {
        type: String
    }
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;