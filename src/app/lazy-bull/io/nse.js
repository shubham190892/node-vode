const Exchange = require('./exchange').Exchange;
const http = require('./http');

class Nse extends Exchange{
  constructor() {
    super();
  }
  async getQuote(code){
    console.log('Fetching quotes for', code);
    return await http.fetch({url: 'https://www1.nseindia.com/live_market/dynaContent/live_watch/get_quote/GetQuote.jsp?symbol=TATAMOTORS&illiquid=0&smeFlag=0&itpFlag=0'})
  }
}
module.exports = {
    Nse: Nse
}