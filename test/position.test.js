const { test, expect } = require("@jest/globals");
const axiosInstance = require('../src/config/axios');

test('Should create a customer position', async function() {
    const axios = await axiosInstance();
    const position = {
        name: 'EMPREGADO'
    }

    const status = (await axios.post(`/position`, position)).status;

    expect(status).toBe(200);
});

test('Should create a admin position', async function() {
    const axios = await axiosInstance();
    const position = {
        name: 'ADMIN'
    }

    
      const status = (await axios.post(`/position`, position)).status;
      expect(status).toBe(200)
});

test('Should create a manager position', async function() {
    const axios = await axiosInstance();
    const position = {
        name: 'GESTOR'
    }

    
    const status = (await axios.post(`/position`, position)).status;
    expect(status).toBe(200)
});

test('Should create a director position', async function() {
    const axios = await axiosInstance();
    const position = {
        name: 'DIRETOR'
    }

    
    const status = (await axios.post(`/position`, position)).status;
    expect(status).toBe(200)
});