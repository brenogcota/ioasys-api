const { test, expect } = require("@jest/globals");
const axiosInstance = require('../src/config/axios');

test('Should return all users', async function() {
    const axios = await axiosInstance();

    const status = (await axios.get('/user')).status;

    expect(status).toBe(200);
});

test('Should create a user', async function() {
    const axios = await axiosInstance();

    const user = {
        name: 'breno',
        email: 'breno@gmail.com',
        borndate: '1999-07-01T00:00:00.000Z',
        uf: 'MG',
        city: 'BERILO',
        schooling: 'Superior'
    }
    const status = (await axios.post(`/user`, user )).status;

    expect(status).toBe(200);
});

test('Should return a user', async function() {
    const axios = await axiosInstance();
    const response = (await axios.get(`/user/ec32c885-267d-451a-a817-f7089a5c1792`)).data;

    expect(response).toHaveLength(1);
});

test('Should update a user', async function() {
    const axios = await axiosInstance();

    const user = {
        name: 'other breno',
    }
    const status = (await axios.patch(`/user/ec32c885-267d-451a-a817-f7089a5c1792`, user)).status;

    expect(status).toBe(200);
});

test('Should delete a user', async function() {
    const axios = await axiosInstance();
    const status = (await axios.delete(`/user/ec32c885-267d-451a-a817-f7089a5c1792`)).status;

    expect(status).toBe(200);
});