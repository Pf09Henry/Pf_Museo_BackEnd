const {Ticket} = require("../../db")
const { Router } = require('express');
const router = Router();

router.post("/post", async(req, res, next)=>{
    const {amount, totalOfPurchase, methodOfPurchase, eventId, userId} = req.body
    try {
        const status = true        
        const newTicket = await Ticket.create({amount, totalOfPurchase, methodOfPurchase, status, eventId, userId})
        res.status(200).send(newTicket)
    } catch (error) {
        next(error)
        res.status(404) 
    }
})

module.exports = router;