const { test, expect } = require("@jest/globals");
const httpAdapter = require('../src/infra/http');

test('Should create JWT Session', async function() {
    const http = await httpAdapter();
    const email = 'breno@gmail.com'
    const { data, status } = await http.post(`/api/v1/session`, { email });

    expect(data).toHaveProperty('token');
    expect(data).toHaveProperty('auth', true);
    expect(status).toBe(200);
});