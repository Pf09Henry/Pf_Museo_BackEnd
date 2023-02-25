const { Router } = require("express");
const { User } = require("../../db");
const router = Router();

router.delete("/delete/:id", async (req, res, next) => {
  try {
    var ExpRegSoloNumeros = "^[0-9]+$";

    // if (req.params.id.match(ExpRegSoloNumeros) === null) {
    //   res.status(404).send("El id debe ser un numero");
    // }

    const user = await User.findByPk(req.params.id);

    if (!user) {
      res.status(404).send("No se encontro el usuario");
    } await user.update({
      status: false,
      isBanned:true
  });

   

    res.status(200).send(`Usuario eliminado ${JSON.stringify(user)}`);
  } catch (error) {
    next(error);
    res.status(404);
  }
});

// router.delete("/delete/:id", async (req, res, next)=>{
//     try {
//         const user = await User.findByPk( req.params.id)
//         await user.destroy()

//          res.status(200).send(`Usuario eliminado ${user}`)

//     } catch (error) {
//         next(error)
//         res.status(404)
//     }
// })

module.exports = router;
