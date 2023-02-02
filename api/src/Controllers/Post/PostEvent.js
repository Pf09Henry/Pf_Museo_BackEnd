const {Event, Guide} = require("../../db")
const { Router } = require('express');
const router = Router();


router.post("/post", async (req, res, next)=>{
    const {name, startDay, endDay, price, img, information, guide} = req.body
    try {
        const newEvent = await Event.create({name, startDay, endDay, price, img, information})
        let guideDb = await Guide.findAll({
            where:{
                name: guide
            }
        })
        newEvent.addGuide(guideDb)
        res.status(200).send(newEvent)
    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;