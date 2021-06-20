const axios = require('axios');
const R = require('ramda');

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json'
}

const fetch = async  params => {
  const method = params.method || 'GET';
  const headers = params.headers || {};
  try{
    return await axios({
      method: method,
      url: params.url,
      params: method === 'GET' ? params.params : undefined,
      timeout: params.timeout || 60000,
      headers: R.mergeLeft(headers, DEFAULT_HEADERS),
      data: method === 'POST' ? params.data : undefined
    });
  }catch (e) {
    console.error('Error while fetching', params, e);
    if(params.throwError){
      throw e;
    }
    return null;
  }
}

module.exports = {
  fetch: fetch
}