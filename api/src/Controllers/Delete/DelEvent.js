const { Router } = require("express");
const { Event, Guide } = require("../../db");
const router = Router();

router.delete("/delete/:id", async (req, res, next) => {
  try {
    var ExpRegSoloNumeros = "^[0-9]+$";

    // if (req.params.id.match(ExpRegSoloNumeros) === null) {
    //   res.status(404).send("El id debe ser un numero");
    // }

    const event = await Event.findByPk(req.params.id);

    if (!event) {
      res.status(404).send("No se encontro el evento");
    } await event.update({
      status: false
  });   

    res.status(200).send(`Evento eliminado ${JSON.stringify(event)}`);
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;
