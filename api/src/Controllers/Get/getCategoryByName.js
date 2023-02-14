const { Router } = require('express');
const { Category } = require("../../db")
const router = Router();

router.get("/:name", async (req, res, next) => {
    const { name } = req.params;
    try {
        const categoryByName = await Category.findOne({
            where: {
                name: name
            }            
        })
        if (categoryByName) {
            res.status(200).send(categoryByName)
        }else{
            res.status(404).send("La categoria que quiere ver no existe")
        }


    } catch (error) {
    res.status(500)
    next(error)
}
})

module.exports = router;