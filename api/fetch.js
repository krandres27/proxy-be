const { default: axios } = require('axios');
require('dotenv').config();

const mainFetch = async (customConfig) => {
  const config = {
    method: 'GET',
    url: 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io/get',
    headers: {
      'X-Api-Key': process.env.TODOS_API_KEY,
    },
    ...customConfig,
  };

  try {
    const apiRes = await axios.request(config);
    return apiRes.data;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = mainFetch;
