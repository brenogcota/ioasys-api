const { test, expect } = require("@jest/globals");
const axios = require('axios');

require('dotenv').config();

const port = process.env.PORT || 3001;

test('Should return users', async function() {
    const response = (await axios({
                            url: `http://localhost:${port}/user`,
                            method: 'get'
                        })).data;

    expect(response).toHaveLength(0);
});

test('Should create a user', async function() {
    const user = {
        name: '',
        email: '',
        borndata: '',
        uf: '',
        city: '',
        schooling: ''
    }

    request(app)
      .post('/user')
      .send(user)
      .set('Accept', 'application/json')
      .expect(200, user);
});