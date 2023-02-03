const { Router } = require('express');
const {User} = require("../../db")
const router = Router();

router.get("/:id", async (req, res, next)=>{
    const {id} = req.params
    try {
        if(id){
            const userById = await User.findOne({
                where:{
                    id: id
                }
            })

            res.status(200).send(userById)
        }
        else if(id != User.findByPk(id)) res.status(404).send("El id es incorrecto")
    } catch (error) {
        res.status(404)
        next(error)
    }
})

module.exports = router