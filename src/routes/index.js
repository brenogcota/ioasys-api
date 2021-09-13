const express = require('express');
const apiRouter = require('./api.routes');
const userRouter = require('./user.routes');
const positionRouter = require('./position.routes');
const companyRouter = require('./company.routes');
const employeeRouter = require('./employee.routes');

const routes = express.Router();

const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');

const limiter = rateLimit({
    windowMs: 10,
    max: 10
});

const speedLimiter = slowDown({
    windowMs: 10,
    delayAfter: 1,
    delayMs: 500
})

routes.get('*', limiter, speedLimiter, async (request, response, next) => {
    next();
});

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'GET / - status 200' });
});

routes.use('/api/v1', apiRouter);
routes.use('/user', userRouter);
routes.use('/position', positionRouter);
routes.use('/company', companyRouter);
routes.use('/employee', employeeRouter);

module.exports = routes;