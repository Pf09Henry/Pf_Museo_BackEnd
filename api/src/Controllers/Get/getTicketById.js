const { Router } = require('express');
const { Ticket, Event, User } = require("../../db")
const router = Router();

router.get('/:id', async (req, res) => {


    try {
        const { id } = req.params;
        const ticketId = await Ticket.findByPk(id, {
            include: [
                {
                    model: Event,
                    attributes: ['name', "img"]
                },
                {
                    model: User,
                    attributes: ["name","image","email"]
                }
            ],
            attributes: {
                exclude: ['userId', 'eventId']
            },

            where: { status: true }
        });
        // const ticketId = await Ticket.findOne({
        //     where: {
        //         id: id,
        //         status: true
        //     },
        //     include: [
        //         {
        //             model: Event,
        //             attributes: ['name', "img"]
        //         },
        //         {
        //             model: User,
        //             attributes: ["name"]
        //         }
        //     ]
        // })
        res.status(200).json(ticketId);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;