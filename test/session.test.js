const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config()

const port = process.env.PORT || 3001;


test('Should create JWT Session', async function() {
    const email = 'breno@gmail.com'
    const status = (await axios.post(`http://localhost:${port}/api/v1/session`, { email })).status;

    expect(status).toBe(200);
});