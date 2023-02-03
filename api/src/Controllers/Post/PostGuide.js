const {Guide, Event} = require("../../db")
const { Router } = require('express');
const router = Router();

router.post("/post", async(req, res, next)=>{
    const {name} = req.body
    try {
        const newGuide = await Guide.create({name})
        res.status(200).send(newGuide)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;