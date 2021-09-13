const { test, expect } = require("@jest/globals");
const httpAdapter = require('../src/infra/http');

test('Should return all users', async function() {
    const http = await httpAdapter();

    const status = (await http.get('/user')).status;

    expect(status).toBe(200);
});

test('Should create a user', async function() {
    const http = await httpAdapter();

    const user = {
        name: 'breno',
        email: 'breno@gmail.com',
        borndate: '1999-07-01T00:00:00.000Z',
        uf: 'MG',
        city: 'BERILO',
        schooling: 'Superior'
    }

    let response = (await http.post(`/user`, user )).data;

    expect(response).toMatchObject(user);
});

test('Should return a user', async function() {
    const http = await httpAdapter();
    const { data, status } = await http.get(`/user/ec32c885-267d-451a-a817-f7089a5c1792`);

    expect(data).toHaveLength(1);
    expect(status).toBe(200);
});

test('Should update a user', async function() {
    const http = await httpAdapter();

    const user = {
        name: 'other breno',
    }
    const { data, status } = await http.patch(`/user/ec32c885-267d-451a-a817-f7089a5c1792`, user);

    expect(data).toMatchObject(user);
    expect(status).toBe(200);
});

test('Should delete a user', async function() {
    const http = await httpAdapter();
    const { data, status } = await http.delete(`/user/ec32c885-267d-451a-a817-f7089a5c1792`);

    expect(data).stringMatching('User deleted successfully.')
    expect(status).toBe(200);
});