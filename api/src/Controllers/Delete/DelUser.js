const { Router } = require('express');
const {User} = require("../../db")
const router = Router();

router.delete("/delete/:id", async (req, res, next)=>{
    try {
        const user = await User.findByPk( req.params.id)
        await user.destroy()
   
         res.status(200).send(`Usuario eliminado ${user}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;