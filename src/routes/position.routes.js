const express = require('express');
const PositionService = require('../services/Position');

const route = express.Router();

route.get('/', async (req, res) => {
        const position = [];

        res.status(200).json(position);
});

route.post('/', PositionService.create);

module.exports = route;