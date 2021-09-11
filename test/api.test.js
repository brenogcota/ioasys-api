const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config();

const port = process.env.PORT || 3001;

test('Should return healthcheck with status 200', async function() {
    const response = await axios({
                            url: `http://localhost:${port}/api/v1/healthcheck`,
                            method: 'get'
                        });

    const { status } = response;
    expect(status).toBe(200);
});