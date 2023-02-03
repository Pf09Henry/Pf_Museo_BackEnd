const { Router } = require("express");
const { Guide } = require("../../db");
const router = Router();

router.put("/put/:id", async (req, res, next) => {
  try {
    var ExpRegSoloNumeros = "^[0-9]+$";

    if (req.params.id.match(ExpRegSoloNumeros) === null) {
      res.status(404).send("El id debe ser un numero");
    }

    if (!req.body.name || String(req.body.name).match(ExpRegSoloNumeros) !== null) {
      res.status(404).send("El nombre es requerido y no puede ser un numero");
    }

    const guide = await Guide.findByPk(req.params.id);

    if (guide) {
      await guide.update({ name: req.body.name });

      res.status(200).send(`Guia actualizado ${JSON.stringify(guide)}`);
    } else {
      res.status(404).send("No se encontro el guia con el id especificado.");
    }
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;
