const { Router } = require('express');
const getAllUsers = require("../Controllers/Get/getUser")
const postUser = require("../Controllers/Post/PostUser")
const PostExhibition = require("../Controllers/Post/PostExhibition")
const postSubscription = require("../Controllers/Post/PostSubscription")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/users", getAllUsers)
router.use("/users", postUser)
router.use("/exhibition", PostExhibition)
router.use("/subscription", postSubscription)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




module.exports = router;