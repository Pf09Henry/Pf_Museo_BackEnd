const { Router } = require('express');
const {Event, Guide} = require("../../db")
const router = Router();

router.delete("/delete", async (req, res, next)=>{
    try {
        const event = await Event.findByPk( req.body.id)
        await event.destroy()
   
         res.status(200).send(`Evento eliminado ${event}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;