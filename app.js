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
let icxObj;
let thcObj
let potObj;
let neblObj;

let ethObj;
let xrpObj;
let adaObj;
let ltcObj;
let mcoObj;
let lendObj;

app.get('/', (req, res) => {
  if (currencies != undefined) {
    console.log("Yeah faster home!");
    res.render('home.hbs', {
      pu_BTC: Number(Math.round(btcObj.price_usd+'e2')+'e-2'),
      pu_MIOTA: Number(Math.round(miotaObj.price_usd+'e2')+'e-2'),
      pu_POWR: Number(Math.round(powrObj.price_usd+'e2')+'e-2'),
      pu_ARDR: Number(Math.round(ardrObj.price_usd+'e2')+'e-2'),
      pu_RDN: Number(Math.round(rdnObj.price_usd+'e2')+'e-2'),
      pu_OMG: Number(Math.round(omgObj.price_usd+'e2')+'e-2'),
      pu_WABI: Number(Math.round(wabiObj.price_usd+'e2')+'e-2'),
      pu_ICX: Number(Math.round(icxObj.price_usd+'e2')+'e-2'),
      pu_THC: Number(Math.round(thcObj.price_usd+'e2')+'e-2'),
      pu_POT: Number(Math.round(potObj.price_usd+'e2')+'e-2'),
      pu_NEBL: Number(Math.round(neblObj.price_usd+'e2')+'e-2'),
      ps_MIOTA: Math.floor(miotaObj.price_btc * 100000000),
      ps_POWR: Math.floor(powrObj.price_btc * 100000000),
      ps_ARDR: Math.floor(ardrObj.price_btc * 100000000),
      ps_RDN: Math.floor(rdnObj.price_btc * 100000000),
      ps_OMG: Math.floor(omgObj.price_btc * 100000000),
      ps_WABI: Math.floor(wabiObj.price_btc * 100000000),
      ps_ICX: Math.floor(icxObj.price_btc * 100000000),
      ps_THC: Math.floor(thcObj.price_btc * 100000000),
      ps_POT: Math.floor(potObj.price_btc * 100000000),
      ps_NEBL: Math.floor(neblObj.price_btc * 100000000),
      ch_BTC: btcObj.percent_change_24h,
      ch_MIOTA: miotaObj.percent_change_24h,
      ch_POWR: powrObj.percent_change_24h,
      ch_ARDR: ardrObj.percent_change_24h,
      ch_RDN: rdnObj.percent_change_24h,
      ch_OMG: omgObj.percent_change_24h,
      ch_WABI: wabiObj.percent_change_24h,
      ch_ICX: icxObj.percent_change_24h,
      ch_THC: thcObj.percent_change_24h,
      ch_POT: potObj.percent_change_24h,
      ch_NEBL: neblObj.percent_change_24h
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
      icxObj = currencies.find(currency => (currency.id === 'icon'));
      thcObj = currencies.find(currency => (currency.id === 'hempcoin'));
      potObj = currencies.find(currency => (currency.id === 'potcoin'));
      neblObj = currencies.find(currency => (currency.id === 'neblio'));
      ethObj = currencies.find(currency => (currency.id === 'ethereum'));
      xrpObj = currencies.find(currency => (currency.id === 'ripple'));
      adaObj = currencies.find(currency => (currency.id === 'cardano'));
      ltcObj = currencies.find(currency => (currency.id === 'litecoin'));
      mcoObj = currencies.find(currency => (currency.id === 'monaco'));
      lendObj = currencies.find(currency => (currency.id === 'ethlend'));
      res.render('home.hbs', {
        pu_BTC: Number(Math.round(btcObj.price_usd+'e2')+'e-2'),
        pu_MIOTA: Number(Math.round(miotaObj.price_usd+'e2')+'e-2'),
        pu_POWR: Number(Math.round(powrObj.price_usd+'e2')+'e-2'),
        pu_ARDR: Number(Math.round(ardrObj.price_usd+'e2')+'e-2'),
        pu_RDN: Number(Math.round(rdnObj.price_usd+'e2')+'e-2'),
        pu_OMG: Number(Math.round(omgObj.price_usd+'e2')+'e-2'),
        pu_WABI: Number(Math.round(wabiObj.price_usd+'e2')+'e-2'),
        pu_ICX: Number(Math.round(icxObj.price_usd+'e2')+'e-2'),
        pu_THC: Number(Math.round(thcObj.price_usd+'e2')+'e-2'),
        pu_POT: Number(Math.round(potObj.price_usd+'e2')+'e-2'),
        pu_NEBL: Number(Math.round(neblObj.price_usd+'e2')+'e-2'),
        ps_MIOTA: Math.floor(miotaObj.price_btc * 100000000),
        ps_POWR: Math.floor(powrObj.price_btc * 100000000),
        ps_ARDR: Math.floor(ardrObj.price_btc * 100000000),
        ps_RDN: Math.floor(rdnObj.price_btc * 100000000),
        ps_OMG: Math.floor(omgObj.price_btc * 100000000),
        ps_WABI: Math.floor(wabiObj.price_btc * 100000000),
        ps_ICX: Math.floor(icxObj.price_btc * 100000000),
        ps_THC: Math.floor(thcObj.price_btc * 100000000),
        ps_POT: Math.floor(potObj.price_btc * 100000000),
        ps_NEBL: Math.floor(neblObj.price_btc * 100000000),
        ch_BTC: btcObj.percent_change_24h,
        ch_MIOTA: miotaObj.percent_change_24h,
        ch_POWR: powrObj.percent_change_24h,
        ch_ARDR: ardrObj.percent_change_24h,
        ch_RDN: rdnObj.percent_change_24h,
        ch_OMG: omgObj.percent_change_24h,
        ch_WABI: wabiObj.percent_change_24h,
        ch_ICX: icxObj.percent_change_24h,
        ch_THC: thcObj.percent_change_24h,
        ch_POT: potObj.percent_change_24h,
        ch_NEBL: neblObj.percent_change_24h
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

app.get('/watching', (req, res) => {
  if (currencies != undefined) {
    console.log("Yeah faster watching!");
    res.render('watching.hbs', {
      pu_ETH: Number(Math.round(ethObj.price_usd+'e2')+'e-2'),
      pu_XRP: Number(Math.round(xrpObj.price_usd+'e2')+'e-2'),
      pu_ADA: adaObj.price_usd,
      pu_LTC: Number(Math.round(ltcObj.price_usd+'e2')+'e-2'),
      pu_MCO: Number(Math.round(mcoObj.price_usd+'e2')+'e-2'),
      pu_LEND: lendObj.price_usd,
      ps_ETH: Math.floor(ethObj.price_btc * 100000000),
      ps_XRP: Math.floor(xrpObj.price_btc * 100000000),
      ps_ADA: Math.floor(adaObj.price_btc * 100000000),
      ps_LTC: Math.floor(ltcObj.price_btc * 100000000),
      ps_MCO: Math.floor(mcoObj.price_btc * 100000000),
      ps_LEND: Math.floor(lendObj.price_btc * 100000000),
      ch_ETH: ethObj.percent_change_24h,
      ch_XRP: xrpObj.percent_change_24h,
      ch_ADA: adaObj.percent_change_24h,
      ch_LTC: ltcObj.percent_change_24h,
      ch_MCO: mcoObj.percent_change_24h,
      ch_LEND: lendObj.percent_change_24h
    });
  } else {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=400').then((response) => {
      console.log("Slower watching but yeah!");
      currencies = response.data;
      btcObj = currencies.find(currency => (currency.id === 'bitcoin'));
      miotaObj = currencies.find(currency => (currency.id === 'iota'));
      powrObj = currencies.find(currency => (currency.id === 'power-ledger'));
      ardrObj = currencies.find(currency => (currency.id === 'ardor'));
      rdnObj = currencies.find(currency => (currency.id === 'raiden-network-token'));
      omgObj = currencies.find(currency => (currency.id === 'omisego'));
      wabiObj = currencies.find(currency => (currency.id === 'wabi'));
      icxObj = currencies.find(currency => (currency.id === 'icon'));
      thcObj = currencies.find(currency => (currency.id === 'hempcoin'));
      potObj = currencies.find(currency => (currency.id === 'potcoin'));
      neblObj = currencies.find(currency => (currency.id === 'neblio'));
      ethObj = currencies.find(currency => (currency.id === 'ethereum'));
      xrpObj = currencies.find(currency => (currency.id === 'ripple'));
      adaObj = currencies.find(currency => (currency.id === 'cardano'));
      ltcObj = currencies.find(currency => (currency.id === 'litecoin'));
      mcoObj = currencies.find(currency => (currency.id === 'monaco'));
      lendObj = currencies.find(currency => (currency.id === 'ethlend'));
      res.render('watching.hbs', {
        pu_ETH: Number(Math.round(ethObj.price_usd+'e2')+'e-2'),
        pu_XRP: Number(Math.round(xrpObj.price_usd+'e2')+'e-2'),
        pu_LTC: Number(Math.round(ltcObj.price_usd+'e2')+'e-2'),
        pu_THC: Number(Math.round(thcObj.price_usd+'e2')+'e-2'),
        pu_MCO: Number(Math.round(mcoObj.price_usd+'e2')+'e-2'),
        pu_LEND: lendObj.price_usd,
        ps_ETH: Math.floor(ethObj.price_btc * 100000000),
        ps_XRP: Math.floor(xrpObj.price_btc * 100000000),
        ps_LTC: Math.floor(ltcObj.price_btc * 100000000),
        ps_THC: Math.floor(thcObj.price_btc * 100000000),
        ps_MCO: Math.floor(mcoObj.price_btc * 100000000),
        ps_LEND: Math.floor(lendObj.price_btc * 100000000),
        ch_ETH: ethObj.percent_change_24h,
        ch_XRP: xrpObj.percent_change_24h,
        ch_LTC: ltcObj.percent_change_24h,
        ch_THC: thcObj.percent_change_24h,
        ch_MCO: mcoObj.percent_change_24h,
        ch_LEND: lendObj.percent_change_24h
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
