const express = require('express');
const authSession = require('../services/Auth');

const route = express.Router();

route.get('/', async (req, res) => {
        res.status(200).json({ message: 'GET /api/v1 - status 200' })
});

route.get('/healthcheck', async (req, res) => {
        res.status(200).json({ healthcheck: true });
});

route.post('/session', authSession.create);

module.exports = route;