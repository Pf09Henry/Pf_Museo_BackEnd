const { Router } = require('express');
const { Comprobante } = require("../../db")
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const allComp = await Comprobante.findAll();
        res.status(200).send(allComp)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router