const express = require('express');

const route = express.Router();

route.get('/', async (req, res) => {
        res.status(200).json({ message: 'GET /api/v1 - status 200' })
});

route.get('/healthcheck', async (req, res) => {
        res.status(200).json({ healthcheck: true });
});

module.exports = route;