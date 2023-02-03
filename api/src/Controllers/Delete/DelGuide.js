const { Router } = require('express');
const {Guide} = require("../../db")
const router = Router();

router.delete("/delete", async (req, res, next)=>{
    try {
        const guide = await Guide.findByPk( req.body.id)
        await guide.destroy()
   
         res.status(200).send(`Guia eliminado ${guide}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;