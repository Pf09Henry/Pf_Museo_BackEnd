const { Router } = require('express');
const { Guide } = require("../../db")
const router = Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const guideId = await Guide.findByPk(id, {      
      where: { status: true }
    });
    res.status(200).json(guideId);
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;