const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config();

const port = process.env.PORT || 3001;

test('Should return all companies', async function() {
    const status = (await axios.get(`http://localhost:${port}/company`)).status;
    
    expect(status).toBe(200);
});

test('Should create a company', async function() {
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: '2020-07-01',
        director: 'breno@gmail.com'
    }

    const status = (await axios.post(`http://localhost:${port}/company`, company )).status;
    
    expect(status).toBe(200);
});

test('Should return a company', async function() {
    const status = (await axios.get(`http://localhost:${port}/company/:id` )).status;
    
    expect(status).toBe(200);
});

test('Should update a company', async function() {
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: '2020-07-01',
        director: 'breno@gmail.com'
    }

    const status = (await axios.patch(`http://localhost:${port}/company/:id`, company )).status;
    
    expect(status).toBe(200);
});

test('Should remove a company', async function() {
    const status = (await axios.delete(`http://localhost:${port}/company/:id`)).status;
    
    expect(status).toBe(200);
});