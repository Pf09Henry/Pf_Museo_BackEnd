const { Router } = require('express');
const {Guide} = require("../../db")
const router = Router();

router.put("/put", async (req, res, next)=>{
   
    try {
        const guide = await Guide.findByPk( req.body.id)
        await guide.update(
            {
                name: req.body.name
            }

        )
   
         res.status(200).send(`Guia actualizado ${guide}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;