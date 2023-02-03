const { Router } = require('express');
const {User} = require("../../db")
const router = Router();

router.put("/put/:id", async (req, res, next)=>{
   
    try {
        const user = await User.findByPk( req.params.id)
        await user.update(
            {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                admin: req.body.admin
                

            }

        )
   
         res.status(200).send(`Usuario actualizado ${user.name}`)

    } catch (error) {
        next(error)
        res.status(404)
    }
})

module.exports = router;