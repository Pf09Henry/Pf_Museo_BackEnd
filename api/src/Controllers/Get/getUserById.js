const { Router } = require('express');
const {User} = require("../../db")
const router = Router();

router.get("/:id", async (req, res, next)=>{
    const {id} = req.params
    const userId = await User.findByPk(id)
    console.log(userId)
    try {
        if(userId != null){
            const userById = await User.findOne({
                where:{
                    id: id
                }
            })
            
            res.status(200).send(userById)
        }else res.status(404).send("El Usuario que quiere ver NO existe")
    } catch (error) {
        res.status(404)
        next(error)
    }
})

module.exports = router