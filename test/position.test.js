const { test, expect } = require("@jest/globals");
const httpAdapter = require('../src/infra/http');

test('Should create a customer position', async function() {
    const http = await httpAdapter();
    const position = {
        name: 'EMPREGADO'
    }

    const { data, status } = await http.post(`/position`, position)

    expect(data).toMatchObject(position);
    expect(status).toBe(200);
});

test('Should create a admin position', async function() {
    const http = await httpAdapter();
    const position = {
        name: 'ADMIN'
    }

    const { data, status } = await http.post(`/position`, position);
    
    expect(data).toMatchObject(position);
    expect(status).toBe(200);
});

test('Should create a manager position', async function() {
    const http = await httpAdapter();
    const position = {
        name: 'GESTOR'
    }

    const { data, status } = await http.post(`/position`, position)
    
    expect(data).toMatchObject(position);
    expect(status).toBe(200)
});

test('Should create a director position', async function() {
    const http = await httpAdapter();
    const position = {
        name: 'DIRETOR'
    }

    const { data, status } = await http.post(`/position`, position)
    
    expect(data).toMatchObject(position);
    expect(status).toBe(200)
});