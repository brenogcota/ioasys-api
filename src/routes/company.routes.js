const express = require('express');
const CompanyService = require('../services/Company');
const { companyValidator, authMiddleware, isAdmin, isManagerOrUser, belongsToSame } = require('../middlewares');

const route = express.Router();

route.get('/', authMiddleware, isAdmin, CompanyService.index);
route.post('/', authMiddleware, isAdmin, companyValidator, CompanyService.create);
route.get('/:id', authMiddleware, isAdmin, CompanyService.show);
route.patch('/:id', authMiddleware, isAdmin, CompanyService.update);
route.delete('/:id', authMiddleware, isAdmin, CompanyService.remove);

module.exports = route;