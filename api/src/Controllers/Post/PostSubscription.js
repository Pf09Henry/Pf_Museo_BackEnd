const {Subscription, User} = require("../../db")
const { Router } = require('express');
const router = Router();


router.post("/post", async (req, res, next)=>{
    try {
        const {email, typeSubscription, detailSubscription} = req.body
        const newSubscription = await Subscription.create({email, typeSubscription, detailSubscription})
        await User.update(
            {
                subscriptionId: newSubscription.id,
            },
            {
                where:{email: newSubscription.email},
            }
        )
        res.status(200).send(newSubscription)
    } catch (error) {
        next(error)
        res.status(404).json(error)
    }
})
module.exports = router

