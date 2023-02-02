const { Router } = require('express');
const {Event, Guide} = require("../../db")
const router = Router();

router.get("/", async (req, res, next)=>{
    try {
        const allEvent = await Event.findAll({
            include: [{
                model: Guide,
                attributes: ['name']
            }]
        })
        res.send(allEvent)
    } catch (error) {
        next(error)
    }
})

module.exports = router;