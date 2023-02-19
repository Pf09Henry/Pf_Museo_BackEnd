const { Router } = require('express');
const sendMail = require('./sendmail');
const router = Router();

router.post("/send_email", (req, res, next)=>{
    //const {mail, subject, message} = req.body
    try {
        sendMail(req.body)
    } catch (error) {
        next(error)
    }
    console.log(req.body)
})

module.exports = router;