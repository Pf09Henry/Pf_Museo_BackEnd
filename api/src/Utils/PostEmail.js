const { Router } = require('express');
const sendMail = require('./sendmail');
const router = Router();

router.post("/send_email", (req, res, next)=>{
    try {
        sendMail(req.body)
        res.status(200).send(req.body.mail)
    } catch (error) {
        next(error)
    }
})

module.exports = router;