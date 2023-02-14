const { Router } = require('express');
const { Event, Guide, Category } = require("../../db")
const router = Router();

router.get("/:name", async (req, res, next) => {
    const { name } = req.params
    try {
        
            const eventByName = await Event.findOne({
                where: {
                    name: name,
                    status: true
                },
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
            let arrayEventName = []
            arrayEventName.push(eventByName)
            let eventName = arrayEventName.map(event => ({
                id: event.id,
                name: event.name,
                startDay: event.startDay,
                endDay: event.endDay,
                price: event.price,
                img: event.img,
                status: event.status,
                availability: event.availability,
                information: event.information,
                guide: event.guides.map(g => ({
                    name: g.name,
                    image: g.image
                })),
                category: event.categories.map(c => ({
                    name: c.name
                }))
            }))

            res.status(200).send(eventName)        
        
    } catch (error) {
        res.status(500)
        next(error)
    }
})

module.exports = router;