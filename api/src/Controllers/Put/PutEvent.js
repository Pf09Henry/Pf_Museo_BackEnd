const { Router } = require('express');
const { Event } = require("../../db")
const router = Router();

router.put("/put/:id", async (req, res, next) => {

    try {
        var ExpRegSoloNumeros = "^[0-9]+$";
        // var ExpRegFecha = "/^(0[1-9]|[1-2]d|3[01])(/)(0[1-9]|1[012])2(d{4})$/";
        // var fecha = "02-02-2020"
        // var vregexNaix = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/;
        // console.log(vregexNaix.test(req.body.startDay));
        // console.log(Date.parse(req.body.startDay));
        // console.log(vregexNaix.test('21/10/2082'));

        if (req.params.id.match(ExpRegSoloNumeros) === null) {
            return res.status(404).send("El id debe ser un numero");
        }

        if (!req.body.name || String(req.body.name).match(ExpRegSoloNumeros) !== null) {
            return res.status(404).send("El nombre es requerido y no puede ser un numero");
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

        const event = await Event.findByPk(req.params.id)// este id es el que se envia desde el front, el metodo findbyPk busca por id
        if (event) {
            await event.update(
                {
                    name: req.body.name,
                    startDay: req.body.startDay,
                    endDay: req.body.endDay,
                    price: req.body.price,
                    img: req.body.img,
                    information: req.body.information,
                    guide: req.body.guide,
                    status: req.body.status
                }
            );

            res.status(200).send(`Evento actualizado ${JSON.stringify(event)}`);
        } else {
            res.status(404).send("No se encontro el evento con el id especificado.");
        }

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;