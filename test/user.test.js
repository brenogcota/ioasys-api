const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config()

const port = process.env.PORT || 3001;


test('Should return users', async function() {
    const response = (await axios({
                            url: `http://localhost:${port}/user`,
                            method: 'get'
                        })).data;

    expect(response).toHaveLength(0);
});

test('Should create a user', async function() {
    const user = {
        name: 'breno',
        email: 'breno@gmail.com',
        borndate: '1999-07-01T00:00:00.000Z',
        uf: 'MG',
        city: 'BERILO',
        schooling: 'Médio',
        companyId: 'bfb8e9d4-7c9f-42de-ac40-cfd1e789697a',
        positionId: '0140b3ee-8415-4c71-a2b7-b3b8431e9d52'
    }

    const status = (await axios.post(`http://localhost:${port}/user`, user)).status;

    expect(status).toBe(200);
});