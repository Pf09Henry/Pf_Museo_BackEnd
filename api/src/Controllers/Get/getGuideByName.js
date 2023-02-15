const { Router } = require('express');
const { Guide } = require("../../db")
const router = Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


router.get("/:name", async (req, res, next) => {
    const { name } = req.params;
    try {
        const guideByName = await Guide.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                },
                
                status: true
            }            
        })
        if (guideByName) {
            res.status(200).send(guideByName)
        }else{
            res.status(404).send("El guia que quiere ver no existe")
        }


    } catch (error) {
    res.status(500)
    next(error)
}
})

module.exports = router;