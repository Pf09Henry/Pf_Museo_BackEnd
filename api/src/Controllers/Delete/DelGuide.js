const { Router } = require("express");
const { Guide } = require("../../db");
const router = Router();

router.delete("/delete/:id", async (req, res, next) => {
  try {
    var ExpRegSoloNumeros = "^[0-9]+$";

    // if (req.params.id.match(ExpRegSoloNumeros) === null) {
    //   res.status(404).send("El id debe ser un numero");
    // }

    const guide = await Guide.findByPk(req.params.id);

    if (!guide) {
      res.status(404).send("No se encontro el guia");
    }  await guide.update({
      status: false
  });   

    res.status(200).send(`Guia eliminado ${JSON.stringify(guide)}`);
  } catch (error) {
    next(error);
    res.status(404);
  }
});

// router.delete("/delete/:id", async(req, res, next)=>{
//     try {
//         const guide = await Guide.findByPk( req.params.id)
//         await guide.destroy()

//          res.status(200).send(`Guia eliminado ${guide}`)

//     } catch (error) {
//         next(error)
//         res.status(404)
//     }
// })

module.exports = router;
