const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config()

const port = process.env.PORT || 3001;


test('Should return all users', async function() {
    const status = (await axios({
                            url: `http://localhost:${port}/user`,
                            method: 'get'
                        })).status;

    expect(status).toBe(200);
});

test('Should create a user', async function() {
    const user = {
        name: 'breno',
        email: 'breno@gmail.com',
        borndate: '1999-07-01T00:00:00.000Z',
        uf: 'MG',
        city: 'BERILO',
        schooling: 'Superior',
        companyName: 'Ioasys',
        positionName: 'Empregado'
    }

    const status = (await axios.post(`http://localhost:${port}/user`, user)).status;

    expect(status).toBe(200);
});

test('Should return a users', async function() {
    const response = (await axios({
                            url: `http://localhost:${port}/user/:id`,
                            method: 'get'
                        })).data;

    expect(response).toHaveLength(1);
});