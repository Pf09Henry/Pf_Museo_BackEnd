const { Router } = require('express');
const getAllUsers = require("../Controllers/Get/getUser")
const getAllEvent = require("../Controllers/Get/getEvent")
const getAllGuides = require("../Controllers/Get/getGuide")
const postUser = require("../Controllers/Post/PostUser")
const postSubscription = require("../Controllers/Post/PostSubscription")
const postEvent = require("../Controllers/Post/PostEvent")
const postGuide = require("../Controllers/Post/PostGuide")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const exhibitionsRoute = require('./exhibitions') // exhibiciones
const eventsRoute = require('./events') // eventos
const usersRoute = require('./users') // usuarios
const adminsRoute = require('./admins') // administradores
const userRoute = require('./user') // usuario


const router = Router();

router.use("/users", getAllUsers)
router.use("/events", getAllEvent)
router.use("/guides", getAllGuides)
router.use("/users", postUser)
router.use("/subscription", postSubscription)
router.use("/event", postEvent)
router.use("/guide", postGuide)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/exhibitions', exhibitionsRoute); // ruta de exhibiciones
router.use('/events', eventsRoute); // ruta de eventos
router.use('/users', usersRoute); // ruta de usuarios
router.use('/admins', adminsRoute); // ruta de administradores
router.use('/user', userRoute); // ruta de usuario


module.exports = router;