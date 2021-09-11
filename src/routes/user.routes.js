const express = require('express');
const UserService = require('../services/User');
const { userValidator } = require('../middlewares');

const route = express.Router();

route.get('/', async (req, res) => {
        const user = [];

        res.status(200).json(user);
});

route.post('/', userValidator, UserService.create);

module.exports = route;