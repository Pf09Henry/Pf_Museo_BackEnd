const { Router } = require('express');
const {Donation, User} = require("../../db")
const router = Router();

router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const donationId = await Donation.findByPk(id, {
        include:
            {
                model: User,
                attributes: ['name', 'image']
            }      
      });
      res.status(200).json(donationId);
    } catch (error) {
      res.status(404).json(error);
    }
  });

  module.exports = router;