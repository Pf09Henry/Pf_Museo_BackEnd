const { Router } = require('express');
const { User, Subscription } = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.get("/", async (req, res, next) => {
    try {
        const getAllUsers = await User.findAll({ where: { status: true } });
        res.send(getAllUsers)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;