const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const {uploadImage} = require("../../Utils/Cloudinary");


router.put("/put/:id", async (req, res, next) => {
  try {  

    const user = await User.findByPk(req.params.id);

    if (user) {
        const result = await uploadImage(req.body.image)
        const image = result
        await user.update({
          name: req.body.name,
          email: req.body.email,
          image: image,
          password: req.body.password,
          phone: req.body.phone,
          status: req.body.status,
          roleId: req.body.roleId
        });
    
        res.status(200).send(`Usuario actualizado ${JSON.stringify(user)}`);
       
       
      } else {
        res.status(404).send("No se encontro el usuario con el id especificado.");
      }

   
  } catch (error) {
    next(error);
    res.status(404);
  }
});

module.exports = router;
