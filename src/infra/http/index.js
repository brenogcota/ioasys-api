const axios = require('axios');

require('dotenv').config()

const port = process.env.PORT || 3001;

module.exports = async () => {
  const email = 'breno5@gmail.com';
  const { token } = (await axios.post(`http://localhost:${port}/api/v1/session/`, { email })).data;

  return axios.create({
    baseURL: `http://localhost:${port}/`,
    headers: {'Authorization': 'Bearer '+token}
  });
}