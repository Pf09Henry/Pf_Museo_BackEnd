const { User, Role } = require("../../db")
const { Router } = require('express');
const router = Router();
const { uploadImage } = require("../../Utils/Cloudinary");



router.post("/post", async (req, res, next) => {
    const { name, email, password, phone } = req.body
    //const emailSubs = await Subscription.findAll({
    //  where: {email: email}
    //})

    try {
        if (req.files.image) {
            const status = true
            const result = await uploadImage(req.files.image.tempFilePath)
            const image = result
            let role = await Role.findOne({
                where: {
                    name: 'user',
                },
            });
            if (!role) {
                return res.status(400).json({message: 'No se encontro el rol debe crearlo'})
            }
            let roleId = role.dataValues.id;
            const newUser = await User.create({ name, image, email, password, phone, status, roleId })
            res.status(200).send(newUser)
        }

    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;