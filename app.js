const express = require('express');
const hbs = require('hbs');
const axios = require('axios');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

let currencies;

let btcObj;
let miotaObj;
let powrObj;
let ardrObj;
let rdnObj;
let omgObj;
let wabiObj;

let ethObj;
let xrpObj;
let ltcObj;
let thcObj;
let mcoObj;
let blitzObj;

app.get('/', (req, res) => {
  if (currencies != undefined) {
    console.log("Yeah faster home!");
    res.render('home.hbs', {
      hold: "active",
      interest: "not-active",
      pu_BTC: Number(Math.round(btcObj.price_usd+'e2')+'e-2'),
      pu_MIOTA: Number(Math.round(miotaObj.price_usd+'e2')+'e-2'),
      pu_POWR: Number(Math.round(powrObj.price_usd+'e2')+'e-2'),
      pu_ARDR: Number(Math.round(ardrObj.price_usd+'e2')+'e-2'),
      pu_RDN: Number(Math.round(rdnObj.price_usd+'e2')+'e-2'),
      pu_OMG: Number(Math.round(omgObj.price_usd+'e2')+'e-2'),
      pu_WABI: Number(Math.round(wabiObj.price_usd+'e2')+'e-2'),
      ps_MIOTA: Math.floor(miotaObj.price_btc * 100000000),
      ps_POWR: Math.floor(powrObj.price_btc * 100000000),
      ps_ARDR: Math.floor(ardrObj.price_btc * 100000000),
      ps_RDN: Math.floor(rdnObj.price_btc * 100000000),
      ps_OMG: Math.floor(omgObj.price_btc * 100000000),
      ps_WABI: Math.floor(wabiObj.price_btc * 100000000),
      ch_BTC: btcObj.percent_change_24h,
      ch_MIOTA: miotaObj.percent_change_24h,
      ch_POWR: powrObj.percent_change_24h,
      ch_ARDR: ardrObj.percent_change_24h,
      ch_RDN: rdnObj.percent_change_24h,
      ch_OMG: omgObj.percent_change_24h,
      ch_WABI: wabiObj.percent_change_24h
    });
  } else {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=400').then((response) => {
      console.log("Slower home but yeah!");
      currencies = response.data;
      btcObj = currencies.find(currency => (currency.id === 'bitcoin'));
      miotaObj = currencies.find(currency => (currency.id === 'iota'));
      powrObj = currencies.find(currency => (currency.id === 'power-ledger'));
      ardrObj = currencies.find(currency => (currency.id === 'ardor'));
      rdnObj = currencies.find(currency => (currency.id === 'raiden-network-token'));
      omgObj = currencies.find(currency => (currency.id === 'omisego'));
      wabiObj = currencies.find(currency => (currency.id === 'wabi'));
      ethObj = currencies.find(currency => (currency.id === 'ethereum'));
      xrpObj = currencies.find(currency => (currency.id === 'ripple'));
      ltcObj = currencies.find(currency => (currency.id === 'litecoin'));
      thcObj = currencies.find(currency => (currency.id === 'hempcoin'));
      mcoObj = currencies.find(currency => (currency.id === 'monaco'));
      blitzObj = currencies.find(currency => (currency.id === 'blitzcash'));
      res.render('home.hbs', {
        hold: "active",
        interest: "not-active",
        pu_BTC: Number(Math.round(btcObj.price_usd+'e2')+'e-2'),
        pu_MIOTA: Number(Math.round(miotaObj.price_usd+'e2')+'e-2'),
        pu_POWR: Number(Math.round(powrObj.price_usd+'e2')+'e-2'),
        pu_ARDR: Number(Math.round(ardrObj.price_usd+'e2')+'e-2'),
        pu_RDN: Number(Math.round(rdnObj.price_usd+'e2')+'e-2'),
        pu_OMG: Number(Math.round(omgObj.price_usd+'e2')+'e-2'),
        pu_WABI: Number(Math.round(wabiObj.price_usd+'e2')+'e-2'),
        ps_MIOTA: Math.floor(miotaObj.price_btc * 100000000),
        ps_POWR: Math.floor(powrObj.price_btc * 100000000),
        ps_ARDR: Math.floor(ardrObj.price_btc * 100000000),
        ps_RDN: Math.floor(rdnObj.price_btc * 100000000),
        ps_OMG: Math.floor(omgObj.price_btc * 100000000),
        ps_WABI: Math.floor(wabiObj.price_btc * 100000000),
        ch_BTC: btcObj.percent_change_24h,
        ch_MIOTA: miotaObj.percent_change_24h,
        ch_POWR: powrObj.percent_change_24h,
        ch_ARDR: ardrObj.percent_change_24h,
        ch_RDN: rdnObj.percent_change_24h,
        ch_OMG: omgObj.percent_change_24h,
        ch_WABI: wabiObj.percent_change_24h
      });
    }).catch((e) => {
      if (e.code === 'ENOTFOUND') {
        res.send('API not found!');
      } else {
        res.send(`Something wrong with Coinmarketcap API: ${e.message}`);
        console.log(e.message);
      }
    });
  }
});

app.get('/interested', (req, res) => {
  if (currencies != undefined) {
    console.log("Yeah faster interested!");
    res.render('interested.hbs', {
      hold: "not-active",
      interest: "active",
      pu_ETH: Number(Math.round(ethObj.price_usd+'e2')+'e-2'),
      pu_XRP: Number(Math.round(xrpObj.price_usd+'e2')+'e-2'),
      pu_LTC: Number(Math.round(ltcObj.price_usd+'e2')+'e-2'),
      pu_THC: Number(Math.round(thcObj.price_usd+'e2')+'e-2'),
      pu_MCO: Number(Math.round(mcoObj.price_usd+'e2')+'e-2'),
      pu_BLITZ: Number(Math.round(blitzObj.price_usd+'e2')+'e-2'),
      ps_ETH: Math.floor(ethObj.price_btc * 100000000),
      ps_XRP: Math.floor(xrpObj.price_btc * 100000000),
      ps_LTC: Math.floor(ltcObj.price_btc * 100000000),
      ps_THC: Math.floor(thcObj.price_btc * 100000000),
      ps_MCO: Math.floor(mcoObj.price_btc * 100000000),
      ps_BLITZ: Math.floor(blitzObj.price_btc * 100000000),
      ch_ETH: ethObj.percent_change_24h,
      ch_XRP: xrpObj.percent_change_24h,
      ch_LTC: ltcObj.percent_change_24h,
      ch_THC: thcObj.percent_change_24h,
      ch_MCO: mcoObj.percent_change_24h,
      ch_BLITZ: blitzObj.percent_change_24h
    });
  } else {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=400').then((response) => {
      console.log("Slower interested but yeah!");
      currencies = response.data;
      btcObj = currencies.find(currency => (currency.id === 'bitcoin'));
      miotaObj = currencies.find(currency => (currency.id === 'iota'));
      powrObj = currencies.find(currency => (currency.id === 'power-ledger'));
      ardrObj = currencies.find(currency => (currency.id === 'ardor'));
      rdnObj = currencies.find(currency => (currency.id === 'raiden-network-token'));
      omgObj = currencies.find(currency => (currency.id === 'omisego'));
      wabiObj = currencies.find(currency => (currency.id === 'wabi'));
      ethObj = currencies.find(currency => (currency.id === 'ethereum'));
      xrpObj = currencies.find(currency => (currency.id === 'ripple'));
      ltcObj = currencies.find(currency => (currency.id === 'litecoin'));
      thcObj = currencies.find(currency => (currency.id === 'hempcoin'));
      mcoObj = currencies.find(currency => (currency.id === 'monaco'));
      blitzObj = currencies.find(currency => (currency.id === 'blitzcash'));
      res.render('interested.hbs', {
        hold: "not-active",
        interest: "active",
        pu_ETH: Number(Math.round(ethObj.price_usd+'e2')+'e-2'),
        pu_XRP: Number(Math.round(xrpObj.price_usd+'e2')+'e-2'),
        pu_LTC: Number(Math.round(ltcObj.price_usd+'e2')+'e-2'),
        pu_THC: Number(Math.round(thcObj.price_usd+'e2')+'e-2'),
        pu_MCO: Number(Math.round(mcoObj.price_usd+'e2')+'e-2'),
        pu_BLITZ: Number(Math.round(blitzObj.price_usd+'e2')+'e-2'),
        ps_ETH: Math.floor(ethObj.price_btc * 100000000),
        ps_XRP: Math.floor(xrpObj.price_btc * 100000000),
        ps_LTC: Math.floor(ltcObj.price_btc * 100000000),
        ps_THC: Math.floor(thcObj.price_btc * 100000000),
        ps_MCO: Math.floor(mcoObj.price_btc * 100000000),
        ps_BLITZ: Math.floor(blitzObj.price_btc * 100000000),
        ch_ETH: ethObj.percent_change_24h,
        ch_XRP: xrpObj.percent_change_24h,
        ch_LTC: ltcObj.percent_change_24h,
        ch_THC: thcObj.percent_change_24h,
        ch_MCO: mcoObj.percent_change_24h,
        ch_BLITZ: blitzObj.percent_change_24h
      });
    }).catch((e) => {
      if (e.code === 'ENOTFOUND') {
        res.send('API not found!');
      } else {
        res.send(`Something wrong with Coinmarketcap API: ${e.message}`);
        console.log(e.message);
      }
    });
  }
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
