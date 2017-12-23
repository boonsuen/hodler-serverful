const express = require('express');
const hbs = require('hbs');
const axios = require('axios');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

var prices = {};

app.get('/', (req, res) => {
  axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/').then((response) => {
    prices.puTC = response.data[0].price_usd;
    prices.ch_BTC = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/iota/');
  }).then((response) => {
    prices.pu_MIOTA = response.data[0].price_usd;
    prices.ps_MIOTA = response.data[0].price_btc;
    prices.ch_MIOTA = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/power-ledger/');
  }).then((response) => {
    prices.pu_POWR = response.data[0].price_usd;
    prices.ps_POWR = response.data[0].price_btc;
    prices.ch_POWR = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/ardor/');
  }).then((response) => {
    prices.pu_ARDR = response.data[0].price_usd;
    prices.ps_ARDR = response.data[0].price_btc;
    prices.ch_ARDR = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/wabi/');
  }).then((response) => {
    prices.pu_WABI = response.data[0].price_usd;
    prices.ps_WABI = response.data[0].price_btc;
    prices.ch_WABI = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/raiden-network-token/');
  }).then((response) => {
    prices.pu_RDN = response.data[0].price_usd;
    prices.ps_RDN = response.data[0].price_btc;
    prices.ch_RDN = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/omisego/');
  }).then((response) => {
    prices.pu_OMG = response.data[0].price_usd;
    prices.ps_OMG = response.data[0].price_btc;
    prices.ch_OMG = response.data[0].percent_change_24h;
    res.render('home.hbs', {
      hold: "active",
      interest: "not-active",
      pu_BTC: Number(Math.round(prices.pu_BTC+'e2')+'e-2'),
      pu_MIOTA: Number(Math.round(prices.pu_MIOTA+'e2')+'e-2'),
      pu_POWR: Number(Math.round(prices.pu_POWR+'e2')+'e-2'),
      pu_ARDR: Number(Math.round(prices.pu_ARDR+'e2')+'e-2'),
      pu_RDN: Number(Math.round(prices.pu_RDN+'e2')+'e-2'),
      pu_OMG: Number(Math.round(prices.pu_OMG+'e2')+'e-2'),
      pu_WABI: Number(Math.round(prices.pu_WABI+'e2')+'e-2'),
      ps_MIOTA: Math.floor(prices.ps_MIOTA * 100000000),
      ps_POWR: Math.floor(prices.ps_POWR * 100000000),
      ps_ARDR: Math.floor(prices.ps_ARDR * 100000000),
      ps_RDN: Math.floor(prices.ps_RDN * 100000000),
      ps_OMG: Math.floor(prices.ps_OMG * 100000000),
      ps_WABI: Math.floor(prices.ps_WABI * 100000000),
      ch_BTC: prices.ch_BTC,
      ch_MIOTA: prices.ch_MIOTA,
      ch_POWR: prices.ch_POWR,
      ch_ARDR: prices.ch_ARDR,
      ch_RDN: prices.ch_RDN,
      ch_OMG: prices.ch_OMG,
      ch_WABI: prices.ch_WABI,
    });
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      res.send('Unable to connect to API servers.');
    } else {
      res.send(e.message);
    }
  });
});

app.get('/interested', (req, res) => {
  axios.get('https://api.coinmarketcap.com/v1/ticker/ethereum/').then((response) => {
    prices.pu_ETH = response.data[0].price_usd;
    prices.ps_ETH = response.data[0].price_btc;
    prices.ch_ETH = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/ripple/');
  }).then((response) => {
    prices.pu_XRP = response.data[0].price_usd;
    prices.ps_XRP = response.data[0].price_btc;
    prices.ch_XRP = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/litecoin/');
  }).then((response) => {
    prices.pu_LTC = response.data[0].price_usd;
    prices.ps_LTC = response.data[0].price_btc;
    prices.ch_LTC = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/hempcoin/');
  }).then((response) => {
    prices.pu_THC = response.data[0].price_usd;
    prices.ps_THC = response.data[0].price_btc;
    prices.ch_THC = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/monaco/');
  }).then((response) => {
    prices.pu_MCO = response.data[0].price_usd;
    prices.ps_MCO = response.data[0].price_btc;
    prices.ch_MCO = response.data[0].percent_change_24h;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/blitzcash/');
  }).then((response) => {
    prices.pu_BLITZ = response.data[0].price_usd;
    prices.ps_BLITZ = response.data[0].price_btc;
    prices.ch_BLITZ = response.data[0].percent_change_24h;
    res.render('interested.hbs', {
      hold: "not-active",
      interest: "active",
      pu_ETH: Number(Math.round(prices.pu_ETH+'e2')+'e-2'),
      pu_XRP: Number(Math.round(prices.pu_XRP+'e2')+'e-2'),
      pu_LTC: Number(Math.round(prices.pu_LTC+'e2')+'e-2'),
      pu_THC: Number(Math.round(prices.pu_THC+'e2')+'e-2'),
      pu_MCO: Number(Math.round(prices.pu_MCO+'e2')+'e-2'),
      pu_BLITZ: Number(Math.round(prices.pu_BLITZ+'e2')+'e-2'),
      ps_ETH: Math.floor(prices.ps_ETH * 100000000),
      ps_XRP: Math.floor(prices.ps_XRP * 100000000),
      ps_LTC: Math.floor(prices.ps_LTC * 100000000),
      ps_THC: Math.floor(prices.ps_THC * 100000000),
      ps_MCO: Math.floor(prices.ps_MCO * 100000000),
      ps_BLITZ: Math.floor(prices.ps_BLITZ * 100000000),
      ch_ETH: prices.ch_ETH,
      ch_XRP: prices.ch_XRP,
      ch_LTC: prices.ch_LTC,
      ch_THC: prices.ch_THC,
      ch_MCO: prices.ch_MCO,
      ch_BLITZ: prices.ch_BLITZ
    });
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      res.send('Unable to connect to API servers.');
    } else {
      res.send(e.message);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
