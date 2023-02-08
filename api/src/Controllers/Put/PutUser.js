const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const {uploadImage} = require("../../Utils/Cloudinary");


router.put("/put/:id", async (req, res, next) => {
  try {
    
    var ExpRegSoloNumeros = "^[0-9]+$";
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    var phoneRegex = /^[0-9]{10}$/;

   
    

    if (!req.body.name || String(req.body.name).match(ExpRegSoloNumeros) !== null){
        res.status(404).send("El nombre es requerido y no puede ser un numero");
    }

    if (!req.body.email || String(req.body.email).match(emailRegex) === null){
      res.status(404).send("El email es requerido y debe ser un email valido");
    }

    if (!req.body.password || String(req.body.password).match(passwordRegex) === null){
        res.status(404).send("La contraseña es requerida y debe tener al menos 8 caracteres, una mayuscula, una minuscula y un numero");
    }

    if (!req.body.phone || String(req.body.phone).match(phoneRegex) === null){
        res.status(404).send("El telefono es requerido y debe tener 10 digitos");
    }

    if ( req.body.admin === true || req.body.admin === false){
            res.status(404).send("El admin es requerido y debe ser un booleano");
        }

    const user = await User.findByPk(req.params.id);

    if (user) {
      if(req.files.image){
        const result = await uploadImage(req.files.image.tempFilePath)
        const image = result
        await user.update({
          name: req.body.name,
          email: req.body.email,
          image: image,
          password: req.body.password,
          phone: req.body.phone,
          admin: req.body.admin,
          status: req.body.status
        });
    
        res.status(200).send(`Usuario actualizado ${JSON.stringify(user)}`);
       
   }
       
      } else {
        res.status(404).send("No se encontro el usuario con el id especificado.");
      }

   
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;
