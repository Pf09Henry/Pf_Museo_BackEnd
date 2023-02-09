const { Router } = require('express');
const { Category } = require("../../db")
const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const allCategory = await Category.findAll({
            where: {
                status: true
            }            
        });
        res.status(200).send(allCategory)
    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;