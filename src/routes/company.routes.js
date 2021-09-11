const express = require('express');
const CompanyService = require('../services/Company');

const route = express.Router();

route.get('/', async (req, res) => {
        const company = [];

        res.status(200).json(company);
});

route.post('/', CompanyService.create);

module.exports = route;