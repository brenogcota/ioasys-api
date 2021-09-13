const { test, expect } = require("@jest/globals");
const httpAdapter = require('../src/infra/http');

test('Should return healthcheck with status 200', async function() {
    const http = await httpAdapter();
    const response = await http.get(`/api/v1/healthcheck`);

    const { status } = response;
    expect(status).toBe(200);
});