const express = require('express');
const PositionService = require('../services/Position');

const route = express.Router();

route.post('/', PositionService.create);

module.exports = route;