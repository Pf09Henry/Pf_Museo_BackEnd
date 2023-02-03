const { Router } = require('express');
const {Event} = require("../../db")
const router = Router();

router.put("/put", async (req, res, next)=>{
   
    try {
        const event = await Event.findByPk( req.body.id)// este id es el que se envia desde el front, el metodo findbyPk busca por id
        await event.update(
            {
                name: req.body.name,
                startDay: req.body.startDay,
                endDay: req.body.endDay,
                price: req.body.price,
                img: req.body.img,
                information: req.body.information,
                guide: req.body.guide
                
                }

        )
   
         res.status(200).send(`Evento actualizado ${event.name}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;