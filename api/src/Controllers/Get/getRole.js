const { Router } = require('express');
const { Role } = require("../../db")
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const allRole = await Role.findAll();
        res.status(200).send(allRole)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router