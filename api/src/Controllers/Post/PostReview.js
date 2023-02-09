const { Review } = require("../../db")
const { Router } = require('express');
const router = Router();

router.post("/post", async (req, res, next) => {

    const { commentary, score, userId, eventId } = req.body

    try {
        const status = true
        const review = await Review.create({ 
            commentary, 
            score, 
            status,
            userId,
            eventId
        })             
            res.status(200).send(review);
        } catch (error) {
             next(error);
             res.status(500).send(error)
            }
        })

module.exports = router;