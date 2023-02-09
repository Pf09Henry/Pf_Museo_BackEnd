const { Router } = require('express');
const { Ticket, Event, User } = require("../../db")
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const allTicket = await Ticket.findAll({
            include: [
                {
                    model: Event,
                    attributes: ['name', "img"]
                },
                {
                    model: User,
                    attributes: ["name"]
                }
            ],
            where: {
                status: true
            }
        });
        res.status(200).send(allTicket)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router