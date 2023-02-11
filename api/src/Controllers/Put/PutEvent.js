const { Router } = require("express");
const { Event } = require("../../db");
const router = Router();
const {uploadImage} = require("../../Utils/Cloudinary");

router.put("/put/:id", async (req, res, next) => {
  const {
    name,
    startDay,
    endDay,
    price,
    img,
    information,
    guide,
    category,
    availability
  } = req.body;
  try {
    var ExpRegSoloNumeros = "^[0-9]+$";
    // var ExpRegFecha = "/^(0[1-9]|[1-2]d|3[01])(/)(0[1-9]|1[012])2(d{4})$/";
    // var fecha = "02-02-2020"
    // var vregexNaix = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
    // console.log(vregexNaix.test(req.body.startDay));
    // console.log(Date.parse(req.body.startDay));
    // console.log(vregexNaix.test('21/10/2082'));
    if ( 
    startDay == "" || !startDay ||
    endDay == "" || !endDay     ||
    price == "" || !price       ||
    information == "" || !information ||
    guide == "" || !guide ||
    category == "" || !category ||
    availability == "" || !availability)
    
    {
      next(new Error("Hay datos incompletos"))
    }
    

    if (
      !name ||
      String(req.body.name).match(ExpRegSoloNumeros) !== null
    ) {
      return res
        .status(404)
        .send("El nombre es requerido y no puede ser un numero");
    }

    // if (req.body.startDay.match(ExpRegFecha) === null) {
    //     return res.status(404).send("La fecha de inicio y fin del evento son requeridas y debe tener el formato aaaa-mm-dd");
    // }
    // console.log(req.body.startDay);
    // console.log(String(req.body.startDay).match(ExpRegFecha))
    // console.log(req.body.endDay);
    // if (req.body.startDay.match(ExpRegFecha) === null && req.body.endDay.match(ExpRegFecha) === null) {
    //     return res.status(404).send("La fecha de inicio y fin del evento son requeridas y debe tener el formato aaaa-mm-dd");
    // }

    const event = await Event.findByPk(req.params.id); // este id es el que se envia desde el front, el metodo findbyPk busca por id
    if (event) {
      if (req.files.img) {
        const result = await uploadImage(req.files.img.tempFilePath);
        const img = result;
          await event.update({
          name: req.body.name,
          startDay: req.body.startDay,
          endDay: req.body.endDay,
          price: req.body.price,
          img: img,
          information: req.body.information,
          guide: req.body.guide,
          status: req.body.status,
        });

        res.status(200).send(`Evento actualizado ${JSON.stringify(event)}`);
      }
    } else {
      res.status(404).send("No se encontro el evento con el id especificado.");
    }
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;
