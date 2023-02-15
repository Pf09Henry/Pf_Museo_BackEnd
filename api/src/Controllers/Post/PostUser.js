const { User, Role } = require("../../db")
const { Router } = require('express');
const router = Router();
const { uploadImage } = require("../../Utils/Cloudinary");
const { sendmail } = require("../../Utils/sendmail");



router.post("/post", async (req, res, next) => {
    const { name, email,image, password, phone } = req.body
    //const emailSubs = await Subscription.findAll({
    //  where: {email: email}
    //})

    try {
            const status = true
            let role = await Role.findOne({
                where: {
                    name: 'user',
                },
            });            
            let roleId = role.dataValues.id
            const result = await uploadImage(req.body.image)
            const image = result
            const newUser = await User.create({ name, image, email, password, phone, status, roleId })
            sendmail(email, "welcome")
            res.status(200).send(newUser)
    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;