const { Router } = require('express');
const getAllUsers = require("../Controllers/Get/getUser")
const getAllEvent = require("../Controllers/Get/getEvent")
const getAllGuides = require("../Controllers/Get/getGuide")
const postUser = require("../Controllers/Post/PostUser")
const postSubscription = require("../Controllers/Post/PostSubscription")
const postEvent = require("../Controllers/Post/PostEvent")
const postGuide = require("../Controllers/Post/PostGuide")
const delUser = require("../Controllers/Delete/DelUser")
const delEvent = require("../Controllers/Delete/DelEvent")
const delGuide = require("../Controllers/Delete/DelGuide")
const putGuide = require("../Controllers/Put/PutGuide")
const putUser = require("../Controllers/Put/PutUser")
const putEvent = require("../Controllers/Put/PutEvent")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/users", getAllUsers)
router.use("/events", getAllEvent)
router.use("/guides", getAllGuides)
router.use("/users", postUser)
router.use("/subscription", postSubscription)
router.use("/event", postEvent)
router.use("/guide", postGuide)
router.use("/users", delUser)
router.use("/events", delEvent)
router.use("/guides", delGuide)
router.use("/guides", putGuide)
router.use("/users", putUser)
router.use("/events", putEvent)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;