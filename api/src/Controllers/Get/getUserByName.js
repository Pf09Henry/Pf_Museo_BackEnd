const { Router } = require("express");
const { User } = require("../../db");
const router = Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

router.get("/:name", async (req, res, next) => { // esta linea de codigo es la que cambia con respecto a getUserById.js
  const { name } = req.params;
 
  try {
    const userByName = await User.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            },
        
            status: true,
        },
      });
    if (userByName) {
        
      res.status(200).send(userByName);
    } else res.status(404).send("El Usuario que quiere ver NO existe");
  } catch (error) {
    res.status(404);
    next(error);
  }
});

module.exports = router;