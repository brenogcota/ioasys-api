const express = require('express');
const apiRouter = require('./api.routes');

const routes = express.Router();

const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
    windowMs: 30 * 1000,
    max: 10
});

const speedLimiter = slowDown({
    windowMs: 30 * 1000,
    delayAfter: 1,
    delayMs: 500
})

routes.get('*', limiter, speedLimiter, async (request, response, next) => {
    next();
});

routes.get('/', (req, res) => {
    res.status(200).json({ healthcheck: true });
});

routes.use('/api', apiRouter);

module.exports = routes;