const { Router } = require('express');
const {Donation, User} = require("../../db")
const router = Router();


router.get("/", async (req, res, next)=>{
    try {
        const allDonation = await Donation.findAll({
            include: [{
                model: User,
                attributes: ['name', 'image']
              }]
        });
        res.status(200).send(allDonation)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;