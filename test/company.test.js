const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config();

const port = process.env.PORT || 3001;

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