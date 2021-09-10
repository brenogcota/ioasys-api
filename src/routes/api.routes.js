const express = require('express');

const route = express.Router();

route.get('/api/v1/', async (req, res) => {
        res.json({ message: 'GET /api/v1' })
});

module.exports = route;