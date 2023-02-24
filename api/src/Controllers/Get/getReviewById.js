const { Router } = require('express');
const { Review, User } = require("../../db")
const router = Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const reviewId = await Review.findByPk(id, {
      include:
      {
        model: User,
        attributes: ['name', 'image', "email"]
      },
      where: { status: true }
    });
    res.status(200).json(reviewId);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
