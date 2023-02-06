const { Router } = require('express');
const {Event, Guide, Category} = require("../../db")
const router = Router();

router.get("/", async (req, res, next)=>{
    try {
        const allEvent = await Event.findAll({
            include: [
                {
                model: Guide,
                attributes: ['name', "image"]
                },
                {
                model: Category,
                attributes: ["name"]
                }
        ]
        })
        let evntMap = allEvent.map(e=>({
            id: e.id,
            name: e.name,
            startDay: e.startDay.toLocaleDateString(),
            endDay: e.endDay.toLocaleDateString(),
            price: e.price,
            img: e.img,
            status:e.status,
            information: e.information,
            guide: e.guides.map(g =>({
                name: g.name,
                image: g.image
            })),
            category: e.categories.map(c =>({
                name: c.name
            }))
        }))
        res.send(evntMap)
    } catch (error) {
        next(error)
    }
})

module.exports = router;