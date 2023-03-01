const {Comprobante, User} = require("../../db")
const { Router } = require('express');
const router = Router();


router.post("/post", async (req, res, next)=>{
    try {
        const {totalOfPurchase, methodOfPurchase, userId, subscriptionId} = req.body
       
        const newComprobante = await Comprobante.create({totalOfPurchase, methodOfPurchase, userId, subscriptionId})
        
        res.status(200).send(newComprobante)
    } catch (error) {
        next(error)
        res.status(404).json(error)
    }
})

module.exports = router

