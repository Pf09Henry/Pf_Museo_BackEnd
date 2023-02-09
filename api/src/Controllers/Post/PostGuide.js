const {Guide, Event} = require("../../db")
const { Router } = require('express');
const router = Router();
const {uploadImage} = require("../../Utils/Cloudinary");

router.post("/post", async(req, res, next)=>{
    const {name, image} = req.body
    try {
        if(req.files.image){
            const status = true
            const result = await uploadImage(req.files.image.tempFilePath)
            const image = result
            const newGuide = await Guide.create({name, image, status})
           res.status(200).send(newGuide)
       }
   } 
        
        
     catch (error) {
        next(error)
        res.status(404) 
    }
})

module.exports = router;