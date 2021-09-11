const { test } = require("@jest/globals");
const request = require('supertest');
const app = require('../src/app');

require('dotenv').config();

test('Should create a customer position', async function() {
    const position = {
        name: 'EMPREGADO'
    }

    request(app)
      .post('/position')
      .send({ name: position.name }) 
      .set('Accept', 'application/json')
      .expect(200, position);
});

test('Should create a admin position', async function() {
    const position = {
        name: 'ADMIN'
    }

    request(app)
      .post('/position')
      .send({ name: position.name }) 
      .set('Accept', 'application/json')
      .expect(200, position);
});

test('Should create a manager position', async function() {
    const position = {
        name: 'GESTOR'
    }

    request(app)
      .post('/position')
      .send({ name: position.name }) 
      .set('Accept', 'application/json')
      .expect(200, position);
});

test('Should create a director position', async function() {
    const position = {
        name: 'DIRETOR'
    }

    request(app)
      .post('/position')
      .send({ name: position.name }) 
      .set('Accept', 'application/json')
      .expect(200, position);
});