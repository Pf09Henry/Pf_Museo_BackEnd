const { Router } = require('express');
const { Subscription, User } = require("../../db")
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const allSub = await Subscription.findAll();
        res.status(200).send(allSub)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router