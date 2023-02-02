const { Router } = require('express');
const {Guide, Event} = require("../../db")
const router = Router();

router.get("/", async (req, res, next)=>{
    try {
        const allGuides = await Guide.findAll({
            include:[{
                model: Event,
                attributes: ["name"]
            }]
        });
        res.status(200).send(allGuides)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router