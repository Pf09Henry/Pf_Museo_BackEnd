const { Router } = require("express");
const { Ticket } = require("../../db");
const router = Router();

router.put("/put/:id", async (req, res, next) => {
  try {

    const review = await Ticket.findByPk(req.params.id);

    if (review) {
        await review.update({            
            status: true
          });
      
          res.status(200).send(`Ticket actualizado ${JSON.stringify(review)}`);
      } else {
        res.status(404).send("No se encontro el ticket con el id especificado.");
      }

   
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;