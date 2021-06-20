const stock = require('./io/stock');
const E = require('./core').Exchange;

stock.getQuote({exchange: E.NSE, code: 'TATAMOTORS'}).then(d => {
  console.log('Hold here', d)
})