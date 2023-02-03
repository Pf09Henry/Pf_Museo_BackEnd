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

const {uploadImage} = require("../../Utils/Cloudinary");
if(req.files?.image){
           const result = await uploadImage(req.files.image.tempFilePath)
        console.log(result)
        }


module.exports = { 
    cloudinary,
    uploadImage
};