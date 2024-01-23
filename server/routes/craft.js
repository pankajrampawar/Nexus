const express = require('express');
const router = express.Router();
const craftController = require('../Controllers/craftController')

router.get('/getCrafts', craftController.getAllCrafts)

module.exports = router;