const { User, Role } = require("../../db")
const { Router } = require('express');
const router = Router();
const { uploadImage } = require("../../Utils/Cloudinary");



router.post("/post", async (req, res, next) => {
    const { name, email,image, password, phone } = req.body
    //const emailSubs = await Subscription.findAll({
    //  where: {email: email}
    //})

    try {
            const status = true
            const newUser = await User.create({ name, image, email, password, phone, status })
            res.status(200).send(newUser)
            // const result = await uploadImage(req.files.image.tempFilePath)
            // const image = result
            // let role = await Role.findOne({
            //     where: {
            //         name: 'user',
            //     },
            // });
    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;