const { Router } = require('express');
const {Guide} = require("../../db")
const router = Router();

router.put("/put/:id", async (req, res, next)=>{
   
    try {
        const guide = await Guide.findByPk( req.params.id)
        if (guide) {
            await guide.update({ name: req.body.name });
            res.status(200).send(`Guia actualizado ${guide}`)
        } else {
            res.status(404).send("No se encontró la guía con el id especificado.");
        }
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;