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
            let role = await Role.findAll({
                where: {
                    name: 'user',
                },
            });
            role = role.map(e => (e.id))
            let roleId = role[0]
            const newUser = await User.create({ name, image, email, password, phone, status, roleId })
            res.status(200).send(newUser)
        }

    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;