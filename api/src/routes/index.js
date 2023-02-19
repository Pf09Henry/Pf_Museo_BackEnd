const { Router } = require('express');

//Get
const getAllUsers = require("../Controllers/Get/getUser")
const getAllEvent = require("../Controllers/Get/getEvent")
const getAllGuides = require("../Controllers/Get/getGuide")
const getAllCategory= require("../Controllers/Get/getCategory")
const getAllTicket= require("../Controllers/Get/getTicket")
const getAllDonation = require("../Controllers/Get/getDonation")
const getAllReview = require("../Controllers/Get/getReview")
const getAllSubscription = require("../Controllers/Get/getSubscription")
const getAllRole = require("../Controllers/Get/getRole")

//Get By Id
const getEventById = require("../Controllers/Get/getEventById")
const getUserById = require("../Controllers/Get/getUserById")
const getDonationById = require("../Controllers/Get/getDonationById")
const getReviewById = require("../Controllers/Get/getReviewById")
const getGuideById = require("../Controllers/Get/getGuideById")
const getTicketById = require("../Controllers/Get/getTicketById")


//Get By Name
const getEventByName = require("../Controllers/Get/getEventByName")
const getCategoryByName = require("../Controllers/Get/getCategoryByName")
const getGuideByName = require("../Controllers/Get/getGuideByName")
const getUserByName = require("../Controllers/Get/getUserByName")

//Post
const postUser = require("../Controllers/Post/PostUser")
const postSubscription = require("../Controllers/Post/PostSubscription")
const postEvent = require("../Controllers/Post/PostEvent")
const postGuide = require("../Controllers/Post/PostGuide")
const postTicket = require("../Controllers/Post/PostTicket")
const postCategory = require("../Controllers/Post/PostCategory")
const postDonation = require("../Controllers/Post/PostDonation")
const postReview = require("../Controllers/Post/PostReview")
const postRole = require("../Controllers/Post/PostRole")

const sendmail = require("../Utils/PostEmail")

//Delete
const delUser = require("../Controllers/Delete/DelUser")
const delEvent = require("../Controllers/Delete/DelEvent")
const delGuide = require("../Controllers/Delete/DelGuide")
const delTicket = require("../Controllers/Delete/DelTicket")

//Put
const putGuide = require("../Controllers/Put/PutGuide")
const putUser = require("../Controllers/Put/PutUser")
const putEvent = require("../Controllers/Put/PutEvent")
const putTicket = require("../Controllers/Put/PutTicket")

//PayPal
// const PaypalCreate = require("../Controllers/PayPal/PaypalCreate")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


//Get All
router.use("/users", getAllUsers)
router.use("/events", getAllEvent)
router.use("/guides", getAllGuides)
router.use("/category", getAllCategory)
router.use("/ticket", getAllTicket)
router.use("/donations", getAllDonation)
router.use("/reviews", getAllReview)
router.use("/subscription", getAllSubscription)
router.use("/role", getAllRole)


//Get by Id
router.use("/event", getEventById)
router.use("/user", getUserById)
router.use("/donation", getDonationById)
router.use("/review", getReviewById)
router.use("/guide", getGuideById)
router.use("/ticket", getTicketById)

//Get by Name
router.use("/eventname", getEventByName)
router.use("/categoryname", getCategoryByName)
router.use("/guidename", getGuideByName)
router.use("/username", getUserByName)



//Post
router.use("/users", postUser)
router.use("/subscription", postSubscription)
router.use("/event", postEvent)
router.use("/guide", postGuide)
router.use("/ticket", postTicket)
router.use("/category", postCategory)
router.use("/donation", postDonation)
router.use("/review", postReview)
router.use("/role", postRole)

router.use("/", sendmail)

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

//PayPal
// router.use("/paypal", PaypalCreate)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;