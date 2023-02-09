const {Donation} = require("../../db")
const { Router } = require('express');
const router = Router();

router.post("/post", async(req, res, next)=>{
    const {name, amount, donationDate} = req.body
    try {
        const donation = await Donation.create({
            name,
            amount,
            donationDate
        })
        res.status(200).send(donation)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;