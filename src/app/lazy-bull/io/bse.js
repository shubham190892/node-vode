const Exchange = require('./exchange').Exchange;
const http = require('./http');
class Bse extends Exchange {
  constructor() {
    super();
  }
  async getQuote(symbol) {}
}

module.exports = {
  Bse: Bse
};
