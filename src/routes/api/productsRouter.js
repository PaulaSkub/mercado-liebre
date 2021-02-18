// ************ Require's ************
const express = require('express');
const router = express.Router();

const productsApiController = require('../../controllers/api/productsController');

router.get('/latest', productsApiController.latest);
router.get('/offers', productsApiController.offers);

module.exports = router;