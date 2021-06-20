const Nse = require('./nse').Nse;
const Bse = require('./bse').Bse;
const E = require('../core').Exchange;

const exchangeServices = {
  [E.BSE]: new Bse(),
  [E.NSE]: new Nse()
};

const getQuote = async symbol => {
  return await exchangeServices[symbol.exchange].getQuote(symbol.code);
};

module.exports = {
  getQuote: getQuote
};
