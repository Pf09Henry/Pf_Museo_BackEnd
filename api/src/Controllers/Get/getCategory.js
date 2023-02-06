const { Router } = require('express');
const Category = require('../../models/Category');
const Event = require("../../models/Event");
const router = Router();

router.get("/", async (req, res, next)=>{
    try {
        const allCategory = await Category.findAll({
            //  include:[{
            //      model: Event,
            //      attributes: ["name"]
            //  }]
        });
        res.status(200).send(allCategory)
    } catch (error) {
        next(error)
        res.status(404)
    }
})