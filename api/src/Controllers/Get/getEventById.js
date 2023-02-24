const { Router } = require('express');
const { Event, Guide, Category } = require("../../db")
const router = Router();

router.get("/:id", async (req, res, next) => {
    const { id } = req.params
    const eventId = await Event.findByPk(id)
    try {
        if (eventId != null) {
            const eventById = await Event.findOne({
                where: {
                    id: id,
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
            let arrayEventId = []
            arrayEventId.push(eventById)
            let eventId = arrayEventId.map(event => ({
                id: event.id,
                name: event.name,
                startDay: event.startDay,
                endDay: event.endDay,
                price: event.price,
                img: event.img,
                status: event.status,
                information: event.information,
                availability: event.availability,
                guide: event.guides.map(g => ({
                    name: g.name,
                    image: g.image
                })),
                category: event.categories.map(c => ({
                    name: c.name
                }))
            }))

            res.status(200).send(eventId)
        }
        else {
            res.status(404).send("El Evento que quiere ver no existe")
        }
    } catch (error) {
        res.status(500)
        next(error)
    }
})

module.exports = router;