const express = require('express');
const axios = require('axios');

const router = express.Router();

const mainCoinsInfo = [
  {
    id: 'basic-attention-token',
    symbol: 'bat',
    name: 'Basic Attention Token'
  },
  { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin' },
  { id: 'cardano', symbol: 'ada', name: 'Cardano' },
  { id: 'eos', symbol: 'eos', name: 'EOS' },
  { id: 'neo', symbol: 'neo', name: 'NEO' },
  { id: 'nuls', symbol: 'nuls', name: 'Nuls' },
  { id: 'power-ledger', symbol: 'powr', name: 'Power Ledger' },
  { id: 'wabi', symbol: 'wabi', name: 'Tael' }
];

const watchingCoinsInfo = [
  { id: 'ardor', symbol: 'ardr', name: 'Ardor' },
  { id: 'ethereum', symbol: 'eth', name: 'Ethereum' },
  { id: 'ethlend', symbol: 'lend', name: 'Aave' },
  { id: 'icon', symbol: 'icx', name: 'ICON' },
  { id: 'iota', symbol: 'miota', name: 'IOTA' },
  { id: 'litecoin', symbol: 'ltc', name: 'Litecoin' },
  { id: 'monaco', symbol: 'mco', name: 'MCO' },
  { id: 'omisego', symbol: 'omg', name: 'OmiseGO' },
  { id: 'ripple', symbol: 'xrp', name: 'XRP' }
];

const mainCoinsIdList = mainCoinsInfo.map(coinObj => coinObj.id);
const watchingCoinsIdList = watchingCoinsInfo.map(coinObj => coinObj.id);
const allCoinsIdList = mainCoinsIdList.concat(watchingCoinsIdList);
const API_URL = `https://api.coingecko.com/api/v3/simple/price?ids=${allCoinsIdList.join()}&vs_currencies=usd%2Cbtc&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`;

// const sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }
// const list = [1, 2, 3, 4]
// const doSomething = async () => {
//   for (const item of list) {
//     await sleep(1000)
//     console.log('🦄')    
//   }
// }
// doSomething()

router.get('/', (req, res) => {
  axios.get(API_URL).then(({ data }) => {
    const coinsDataToRender = mainCoinsInfo.map(coin => {
      const coinInfo = mainCoinsInfo.find(info => info.id === coin.id);
      return {
        ...coinInfo,
        ...data[coin.id],
        usd: Number(Math.round(data[coin.id].usd+'e2')+'e-2'),
        btc: Math.floor(data[coin.id].btc * 100000000),
        usd_24h_change: Number(Math.round(data[coin.id].usd_24h_change+'e2')+'e-2')
      }
    }).sort((a, b) => b.usd_market_cap - a.usd_market_cap);

    res.render('main', {
      coinsDataToRender,
      isMainView: true
    });
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      res.send('API not found!');
    } else {
      res.send(`Something wrong: ${e.message}`);
      console.log(e.message);
    }
  });
});

router.get('/watching', (req, res) => {
  axios.get(API_URL).then(({ data }) => {
    const coinsDataToRender = watchingCoinsInfo.map(coin => {
      const coinInfo = watchingCoinsInfo.find(info => info.id === coin.id);
      return {
        ...coinInfo,
        ...data[coin.id],
        usd: Number(Math.round(data[coin.id].usd+'e2')+'e-2'),
        btc: Math.floor(data[coin.id].btc * 100000000),
        usd_24h_change: Number(Math.round(data[coin.id].usd_24h_change+'e2')+'e-2')
      }
    }).sort((a, b) => b.usd_market_cap - a.usd_market_cap);

    res.render('main', {
      coinsDataToRender,
      isMainView: false
    });
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      res.send('API not found!');
    } else {
      res.send(`Something wrong: ${e.message}`);
      console.log(e.message);
    }
  });
});

module.exports = router;
