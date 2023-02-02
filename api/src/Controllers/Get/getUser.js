const { Router } = require('express');
const {User, Subscription} = require("../../db")
const router = Router();


// pedimos todos los usuarios
router.get("/", async (req, res, next)=>{
    try {
        const getAllUsers = await User.findAll();
        // const userMap = getAllUsers.map((user) => {
        //     return{
        //         id: user.id,
        //         name: user.name,
        //         email: user.email,
        //         phone: user.phone,
        //         admin: user.admin,
        //         subscription: user.subscriptionId
        //     }
        // })
        res.send(getAllUsers)
    } catch (error) {
        next(error)
        res.status(404)
    }
})


module.exports = router;