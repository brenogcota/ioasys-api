const { test, expect } = require("@jest/globals");
const httpAdapter = require('../src/infra/http');

test('Should return all companies', async function() {
    const http = await httpAdapter();
    const status = (await http.get(`/company`)).status;
    
    expect(status).toBe(200);
});

test('Should create a company', async function() {
    const http = await httpAdapter();
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: '2020-07-01',
        director: 'breno@gmail.com'
    }

    const { data, status } = await http.post(`/company`, company );
    
    expect(data).toMatchObject(company);
    expect(status).toBe(200);
});

test('Should return a company', async function() {
    const http = await httpAdapter();
    const { data, status } = await http.get(`/company/ec32c885-267d-451a-a817-f7089a5c1792` );
    
    expect(data).toHaveLength(1);
    expect(status).toBe(200);
});

test('Should update a company', async function() {
    const http = await httpAdapter();
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: '2020-07-01',
        director: 'breno@gmail.com'
    }

    const { data, status } = await http.patch(`/company/ec32c885-267d-451a-a817-f7089a5c1792`, company );
    
    expect(data).toMatchObject(company);
    expect(status).toBe(200);
});

test('Should remove a company', async function() {
    const http = await httpAdapter();
    const { data, status } = await http.delete(`/company/ec32c885-267d-451a-a817-f7089a5c1792`);
    
    expect(data).stringMatching('Company deleted successfully.')
    expect(status).toBe(200);
});