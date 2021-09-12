const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config();

const port = process.env.PORT || 3001;

test('Should create a customer position', async function() {
    const position = {
        name: 'EMPREGADO'
    }

    const status = (await axios.post(`http://localhost:${port}/position`, position)).status;

    expect(status).toBe(200);
});

test('Should create a admin position', async function() {
    const position = {
        name: 'ADMIN'
    }

    
      const status = (await axios.post(`http://localhost:${port}/position`, position)).status;
      expect(status).toBe(200)
});

test('Should create a manager position', async function() {
    const position = {
        name: 'GESTOR'
    }

    
    const status = (await axios.post(`http://localhost:${port}/position`, position)).status;
    expect(status).toBe(200)
});

test('Should create a director position', async function() {
    const position = {
        name: 'DIRETOR'
    }

    
    const status = (await axios.post(`http://localhost:${port}/position`, position)).status;
    expect(status).toBe(200)
});