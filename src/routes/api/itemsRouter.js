// ************ Require's ************
const express = require('express');
const router = express.Router();

const itemsApiController = require('../../controllers/api/itemsController');

router.post('/', itemsApiController.add);
router.delete('/', itemsApiController.deleteFromCart);

module.exports = router;