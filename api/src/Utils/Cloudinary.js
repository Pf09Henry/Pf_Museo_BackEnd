require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure: true
});



async function uploadImage (filePath){
    try{
        const res =  await cloudinary.uploader.upload(filePath,{folder: "User"})
        return res.secure_url
    } catch(err){
        console.log(err);
    }
}


module.exports = { 
    cloudinary,
    uploadImage
};