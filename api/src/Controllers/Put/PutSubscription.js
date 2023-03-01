const { Router } = require("express");
const { Subscription } = require("../../db");
const router = Router();

router.put("/put/:id", async (req, res, next) => {
    try {

        const subscription = await Subscription.findByPk(req.params.id);

        if (subscription) {
            await Subscription.update({
                status: req.body.status,
            });

            res.status(200).send(`Subscripcion actualizado ${JSON.stringify(subscription)}`);
        } else {
            res.status(404).send("No se encontro la Subscripcion con el id especificado.");
        }


    } catch (error) {
        next(error);
        res.status(404);
    }
});

module.exports = router;