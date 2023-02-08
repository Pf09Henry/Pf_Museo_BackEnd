const { Router } = require('express');
const getAllUsers = require("../Controllers/Get/getUser")
const getAllEvent = require("../Controllers/Get/getEvent")
const getAllGuides = require("../Controllers/Get/getGuide")
const getAllCategory= require("../Controllers/Get/getCategory")
const getAllTicket= require("../Controllers/Get/getTicket")

const getEventById = require("../Controllers/Get/getEventById")
const getUserById = require("../Controllers/Get/getUserById")

const postUser = require("../Controllers/Post/PostUser")
const postSubscription = require("../Controllers/Post/PostSubscription")
const postEvent = require("../Controllers/Post/PostEvent")
const postGuide = require("../Controllers/Post/PostGuide")
const postTicket = require("../Controllers/Post/PostTicket")
const postCategory = require("../Controllers/Post/PostCategory")


const delUser = require("../Controllers/Delete/DelUser")
const delEvent = require("../Controllers/Delete/DelEvent")
const delGuide = require("../Controllers/Delete/DelGuide")
const delTicket = require("../Controllers/Delete/DelTicket")




const putGuide = require("../Controllers/Put/PutGuide")
const putUser = require("../Controllers/Put/PutUser")
const putEvent = require("../Controllers/Put/PutEvent")
const putTicket = require("../Controllers/Put/PutTicket")



// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


//Get All
router.use("/users", getAllUsers)
router.use("/events", getAllEvent)
router.use("/guides", getAllGuides)
router.use("/category", getAllCategory)
router.use("/ticket", getAllTicket)

//Get by Id
router.use("/event", getEventById)
router.use("/user", getUserById)

//Post
router.use("/users", postUser)
router.use("/subscription", postSubscription)
router.use("/event", postEvent)
router.use("/guide", postGuide)
router.use("/ticket", postTicket)
router.use("/category", postCategory)

//Delete
router.use("/users", delUser)
router.use("/events", delEvent)
router.use("/guides", delGuide)
router.use("/ticket", delTicket)


//Put
router.use("/guides", putGuide)
router.use("/users", putUser)
router.use("/events", putEvent)
router.use("/tickets", putTicket)




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;