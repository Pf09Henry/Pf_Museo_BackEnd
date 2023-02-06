require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});


  async function uploadImage (filePath){
    return await cloudinary.uploader.upload(filePath,{
        folder: 'Users'
    })
}

module.exports = { 
    cloudinary,
    uploadImage
};