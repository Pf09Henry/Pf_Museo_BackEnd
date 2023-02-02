const {User, Subscription} = require("../../db")
const { Router } = require('express');
const router = Router();


router.post("/post", async (req, res, next)=>{
    const {name, email, password, phone, admin} = req.body
    const emailSubs = await Subscription.findAll({
        where: {email: email}
    })
    console.log(emailSubs)
    try {
        const newUser = await User.create({name, email, password, phone, admin})
        res.status(200).send(newUser)
    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;