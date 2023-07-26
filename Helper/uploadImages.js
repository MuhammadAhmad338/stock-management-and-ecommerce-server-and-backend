const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (imageUrl) => {
    try {
        let image = `${imageUrl}`;
        console.log(`Image ${image}`)
        let result = await cloudinary.uploader.upload(image);
        let thumbnail = result.secure_url;
        return thumbnail;
    } catch (error) {
        console.log(error);
    }
}

const uploadImages = async (images) => {
    try {
        let uploadedImages = [];
        for (let i = 0; i < images.length; i++) {
            let result = await cloudinary.uploader.upload(images[i]);
            uploadedImages.push(result);
        }
        return uploadedImages;
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { uploadImage, uploadImages };

