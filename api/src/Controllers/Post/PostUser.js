const {User} = require("../../db")
const { Router } = require('express');
const router = Router();
const {uploadImage} = require("../../Utils/Cloudinary");



router.post("/post", async (req, res, next)=>{
    const {name, email,image, password, phone, admin} = req.body
    //const emailSubs = await Subscription.findAll({
      //  where: {email: email}
    //})
    
    try {
        if(req.files.image){
            const status = true
            const result = await uploadImage(req.files.image.tempFilePath)
            const image = result
            const newUser = await User.create({name,image, email, password, phone, admin, status})
            res.status(200).send(newUser)
       }
   
        } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;