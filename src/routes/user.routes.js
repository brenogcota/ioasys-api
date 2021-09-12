const express = require('express');
const UserService = require('../services/User');
const { userValidator, authMiddleware, positionAdmin, positionManagerOrUser } = require('../middlewares');

const route = express.Router();

route.get('/', authMiddleware, positionAdmin, UserService.index);
route.post('/', authMiddleware, positionAdmin, userValidator, UserService.create);
route.get('/:id', authMiddleware, positionAdmin, UserService.show);
route.patch('/:id', authMiddleware, positionManagerOrUser, UserService.update);
route.delete('/:id', authMiddleware, positionAdmin, UserService.remove)

module.exports = route;