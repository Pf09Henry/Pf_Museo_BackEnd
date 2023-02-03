const { Router } = require('express');
const {Event, Guide, Category} = require("../../db")
const router = Router();

router.get("/", async (req, res, next)=>{
    try {
        const allEvent = await Event.findAll({
            include: [
                {
                model: Guide,
                attributes: ['name']
                },
                {
                model: Category,
                attributes: ["name"]
                }
        ]
        })
        // let evntMap = allEvent.map(e=>({
        //     id: e.id,
        //     startDay: e.startDay,
        //     endDay: e.endDay,
        //     price: e.price,
        //     img: e.img,
        //     information: e.information,
        //     guide: e.guides.map(g => g.name).join(", "),
        //     category: e.categoryId
        // }))
        res.send(allEvent)
    } catch (error) {
        next(error)
    }
})

module.exports = router;