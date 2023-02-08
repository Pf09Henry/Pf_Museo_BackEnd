const { Event, Guide, Category } = require("../../db");
const { Router } = require("express");
const { uploadImage } = require("../../Utils/Cloudinary");
const router = Router();

router.post("/post", async (req, res, next) => {
  const {
    name,
    startDay,
    endDay,
    price,
    img,
    information,
    guide,
    category,
    status,
  } = req.body;


  try {
    if (req.files.img) {
      const result = await uploadImage(req.files.img.tempFilePath);
      const img = result;
      const newEvent = await Event.create({
        name,
        startDay,
        endDay,
        price,
        img,
        information,
        guide,
        category,
        status,
      });
      let guideDb = await Guide.findAll({
        where: {
          name: guide,
        },
      });
      let catDb = await Category.findAll({
        where: {
          name: category,
        },
      });
      newEvent.addCategory(catDb);
      newEvent.addGuide(guideDb);
      res.status(200).send(newEvent);

router.post("/post", async (req, res, next)=>{

    const {name, startDay, endDay, price, img, information, guide, category, status} = req.body
    
    try {
        // if(!req.files?.img){
        //     const result = await uploadImage(req.files.img.tempFilePath)
        //     const img = result.secure_url
            const newEvent = await Event.create({name, startDay, endDay, price, img, information,guide,category, status})
            let guideDb = await Guide.findAll({
                where:{
                    name: guide
                }
            })
            let catDb = await Category.findAll({
                where:{
                    name: category
                }
            })
            newEvent.addCategory(catDb)
            newEvent.addGuide(guideDb)
            res.status(200).send(newEvent)
       
    } catch (error) {
        next(error)
        res.status(500)

    }
  } catch (error) {
    next(error);
    res.status(500);
  }
});

module.exports = router;
