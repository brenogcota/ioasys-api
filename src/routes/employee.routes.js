const express = require('express');
const employeeService = require('../services/Employee');
const { employeeValidator, authMiddleware, isCompanyManager } = require('../middlewares');

const route = express.Router();

route.get('/:id', authMiddleware, isCompanyManager, employeeService.index);
route.post('/', authMiddleware, isCompanyManager, employeeValidator, employeeService.create);
route.delete('/:id', authMiddleware, isCompanyManager, employeeService.remove);

module.exports = route;