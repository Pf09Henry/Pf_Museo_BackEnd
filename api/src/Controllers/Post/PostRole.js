const {Role} = require("../../db")
const { Router } = require('express');
const router = Router();
const {uploadImage} = require("../../Utils/Cloudinary");

router.post("/post", async(req, res, next)=>{
    const {name} = req.body
    try {
        const newRole = await Role.create({name})
        res.status(200).send(newRole)       
   }    
     catch (error) {
        next(error)
        res.status(404) 
    }
})

module.exports = router;