const { test, expect } = require("@jest/globals");
const httpAdapter = require('../src/infra/http');

test('Should return all employees', async function() {
    const http = await httpAdapter();
    const status = (await http.get('/employee/ec32c885-267d-451a-a817-f7089a5c1792')).status;

    expect(status).toBe(200);
});

test('Should create a employee', async function() {
    const http = await httpAdapter();
    const user = {
        userId: "dec26d50-74c8-4a9d-9e55-e11fd1f9a443",
        companyId: "ec32c885-267d-451a-a817-f7089a5c1792",
        positionName: "DIRETOR"
    }

    const { data, status } = await http.post(`/employee`, user);

    expect(data).toMatchObject(user);
    expect(status).toBe(200);
});

test('Should delete a employee', async function() {
    const http = await httpAdapter();
    const { data, status } = await http.delete(`/employee/3039b04b-0229-4bc6-89cf-142a3983ada5`);

    expect(status).toBe(200);
});