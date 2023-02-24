const { Router } = require('express');
const { Review, User, Event } = require("../../db")
const router = Router();


router.get("/", async (req, res, next) => {
    try {
        const allReview = await Review.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name', 'image', "email"]
                },
                {
                    model: Event,
                    attributes: ['name', 'img']
                }
            ],
            where: { status: true }
        });
        res.status(200).send(allReview)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;