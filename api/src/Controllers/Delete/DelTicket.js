const { Router } = require("express");
const { Ticket } = require("../../db");
const router = Router();

router.delete("/delete/:id", async (req, res, next) => {
  try {
    // var ExpRegSoloNumeros = "^[0-9]+$";

    // if (req.params.id.match(ExpRegSoloNumeros) === null) {
    //   res.status(404).send("El id debe ser un numero");
    // }

    const ticket = await Ticket.findByPk(req.params.id);

    if (!ticket) {
      res.status(404).send("No se encontro el ticket");      
    }else{
        await ticket.update({            
            status: false
          });
    }

    res.status(200).send(`Ticket eliminado ${JSON.stringify(ticket)}`);
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;