const { Router } = require("express");
const { Ticket } = require("../../db");
const router = Router();

router.put("/put/:id", async (req, res, next) => {
  try {

    const ticket = await Ticket.findByPk(req.params.id);

    if (ticket) {
        await ticket.update({            
            status: true,
            statusOfPurchase: req.body.statusOfPurchase
          });
      
          res.status(200).send(`Ticket actualizado ${JSON.stringify(ticket)}`);
      } else {
        res.status(404).send("No se encontro el ticket con el id especificado.");
      }

   
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;