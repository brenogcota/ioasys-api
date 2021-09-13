const { test, expect } = require("@jest/globals");
const axiosInstance = require('../src/config/axios');

test('Should return all companies', async function() {
    const axios = await axiosInstance();
    const status = (await axios.get(`/company`)).status;
    
    expect(status).toBe(200);
});

test('Should create a company', async function() {
    const axios = await axiosInstance();
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: '2020-07-01',
        director: 'breno@gmail.com'
    }

    const status = (await axios.post(`/company`, company )).status;
    
    expect(status).toBe(200);
});

test('Should return a company', async function() {
    const axios = await axiosInstance();
    const status = (await axios.get(`/company/ec32c885-267d-451a-a817-f7089a5c1792` )).status;
    
    expect(status).toBe(200);
});

test('Should update a company', async function() {
    const axios = await axiosInstance();
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: '2020-07-01',
        director: 'breno@gmail.com'
    }

    const status = (await axios.patch(`/company/ec32c885-267d-451a-a817-f7089a5c1792`, company )).status;
    
    expect(status).toBe(200);
});

test('Should remove a company', async function() {
    const axios = await axiosInstance();
    const status = (await axios.delete(`/company/ec32c885-267d-451a-a817-f7089a5c1792`)).status;
    
    expect(status).toBe(200);
});