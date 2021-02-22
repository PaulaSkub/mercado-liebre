// ************ Require's ************
const express = require('express');
const router = express.Router();

const itemsApiController = require('../../controllers/api/itemsController');

router.post('/', itemsApiController.add);

module.exports = router;