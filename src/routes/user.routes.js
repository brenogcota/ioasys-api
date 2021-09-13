const express = require('express');
const UserService = require('../services/User');
const { userValidator, authMiddleware, isAdmin, isManagerOrUser, belongsToSame } = require('../middlewares');

const route = express.Router();

route.get('/', authMiddleware, isAdmin, UserService.index);
route.post('/', authMiddleware, isAdmin, userValidator, UserService.create);
route.get('/:id', authMiddleware, isAdmin, UserService.show);
route.patch('/:id', authMiddleware, isManagerOrUser, belongsToSame, UserService.update);
route.delete('/:id', authMiddleware, isAdmin, UserService.remove)

module.exports = route;