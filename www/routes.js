const express = require('express');
const router = express.Router();

const luisService = require('./luis.service');

router.get('/logs', (req, res) => {
  luisService.getLogs(req, res);
});

module.exports = router;
