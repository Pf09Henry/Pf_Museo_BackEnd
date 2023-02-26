const { Router } = require("express");
const { Review } = require("../../db");
const router = Router();

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const review = await Review.findByPk({ id });
        if (!review) {
            res.status(404).send("No se encontro el Comentario");
        } else {
            await review.update({
                status: false
            });
        }
    } catch (err) {
        next(err)
        res.status(500).send(err);
    }
})

module.exports = router;