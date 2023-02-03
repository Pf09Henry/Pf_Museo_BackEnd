const { Router } = require('express');
const {Guide} = require("../../db")
const router = Router();

router.delete("/delete/:id", async(req, res, next)=>{
    try {
        const guide = await Guide.findByPk( req.params.id)
        await guide.destroy()
   
         res.status(200).send(`Guia eliminado ${guide}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;