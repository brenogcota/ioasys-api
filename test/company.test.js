const { test } = require("@jest/globals");
const request = require('supertest');
const app = require('../src/app');

require('dotenv').config();

test('Should create a company', async function() {
    const company = {
        name: 'Ioasys',
        description: 'Software',
        occupation: 'software',
        founded_in: Date.now(),
        director_email: ''
    }

    request(app)
      .post('/company')
      .send(company)
      .set('Accept', 'application/json')
      .expect(200, company);
});