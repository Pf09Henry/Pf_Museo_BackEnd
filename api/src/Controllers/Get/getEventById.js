const { Router } = require('express');
const {Event, Guide, Category} = require("../../db")
const router = Router();

router.get("/:id", async (req, res, next)=>{
    const {id} = req.params
    try {
        if(id){
            const eventById = await Event.findOne({
                where:{
                    id: id
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
            let eventId = arrayEventId.map(event =>({
                id: event.id,
                name: event.name,
                startDay: event.startDay.toLocaleDateString(),
                endDay: event.endDay.toLocaleDateString(),
                price: event.price,
                img: event.img,
                information: event.information,
                guide: event.guides.map(g =>({
                    name: g.name,
                    image: g.image
                })),
                category: event.categories.map(c =>({
                    name: c.name
                }))
            }))
            
            res.status(200).send(eventId)
        }
        else{
            res.status(404).send("Id Incorrecto")
        }
    } catch (error) {
        res.status(500)
        next(error)
    }
})

module.exports = router;