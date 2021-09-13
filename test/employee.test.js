const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config()

const port = process.env.PORT || 3001;


test('Should return all employees', async function() {
    const status = (await axios({
                            url: `http://localhost:${port}/employee`,
                            method: 'get'
                        })).status;

    expect(status).toBe(200);
});

test('Should create a employee', async function() {
    const user = {
        userId: "",
        companyId: "",
        positionName: "DIRETOR"
    }

    const status = (await axios.post(`http://localhost:${port}/employee`, user)).status;

    expect(status).toBe(200);
});

test('Should delete a employee', async function() {
    const status = (await axios({
                            url: `http://localhost:${port}/employee/:id`,
                            method: 'delete'
                        })).status;

    expect(status).toBe(200);
});