const {Exhibition} = require("../../db")
const { Router } = require('express');
const router = Router();


router.post("/post", async (req, res, next)=>{
    const {name, categori, description, img} = req.body
    try {
        const newExhibition = await Exhibition.create({name, categori, description, img})
        res.status(200).send(newExhibition)
    } catch (error) {
        next(error)
        res.status(500)
    }
})

module.exports = router;