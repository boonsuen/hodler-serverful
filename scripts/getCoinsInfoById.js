const axios = require('axios');

const mainCoinsIdList = [
  'bitcoin',
  'nuls',
  'wabi',
  'basic-attention-token',
  'cardano',
  'eos',
  'neo',
  'power-ledger'
];

const watchingCoinsIdList = [
  'litecoin',
  'ripple',
  'ethereum',
  'ardor',
  'iota',
  'monaco',
  'omisego',
  'icon',
  'ethlend'
];

axios.get('https://api.coingecko.com/api/v3/coins/list').then(({ data }) => {
  const mainCoinsInfo = data.filter((coin) => {
    return mainCoinsIdList.indexOf(coin.id) !== -1;
  });
  console.log(mainCoinsInfo);
  const watchingCoinsInfo = data.filter((coin) => {
    return watchingCoinsIdList.indexOf(coin.id) !== -1;
  });
  console.log(watchingCoinsInfo);
  console.log(mainCoinsInfo.concat(watchingCoinsInfo));
});