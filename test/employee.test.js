const { test, expect } = require("@jest/globals");
const axiosInstance = require('../src/config/axios');

test('Should return all employees', async function() {
    const axios = await axiosInstance();
    const status = (await axios.get('/employee/ec32c885-267d-451a-a817-f7089a5c1792')).status;

    expect(status).toBe(200);
});

test('Should create a employee', async function() {
    const axios = await axiosInstance();
    const user = {
        userId: "dec26d50-74c8-4a9d-9e55-e11fd1f9a443",
        companyId: "ec32c885-267d-451a-a817-f7089a5c1792",
        positionName: "DIRETOR"
    }

    const status = (await axios.post(`/employee`, user)).status;

    expect(status).toBe(200);
});

test('Should delete a employee', async function() {
    const axios = await axiosInstance();
    const status = (await axios.delete(`/employee/3039b04b-0229-4bc6-89cf-142a3983ada5`)).status;

    expect(status).toBe(200);
});