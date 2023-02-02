const {Event} = require("../../db")
const { Router } = require('express');
const router = Router();


router.post("/post", async (req, res, next)=>{
    const {name, inicio, fin, img, informacion, guide, category} = req.body
    try {
        const newEvent = await Event.create({name, inicio, fin, img, informacion})
        res.status(200).send(newEvent)
    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;