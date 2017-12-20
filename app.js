const express = require('express');
const hbs = require('hbs');
const axios = require('axios');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  var pu_BTC;
  var pu_MIOTA;
  var pu_POWR;
  var pu_ARDR;
  var pu_RDN;
  var pu_OMG;
  var pu_WABI;
  var pu_PING;

  var ps_MIOTA;
  var ps_POWR;
  var ps_ARDR;
  var ps_RDN;
  var ps_OMG;
  var ps_WABI;
  var ps_PING;

  axios.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/').then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Unable to fetch data.');
    }

    pu_BTC = response.data[0].price_usd;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/iota/');
  }).then((response) => {
    pu_MIOTA = response.data[0].price_usd;
    ps_MIOTA = response.data[0].price_btc;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/power-ledger/');
  }).then((response) => {
    pu_POWR = response.data[0].price_usd;
    ps_POWR = response.data[0].price_btc;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/ardor/');
  }).then((response) => {
    pu_ARDR = response.data[0].price_usd;
    ps_ARDR = response.data[0].price_btc;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/wabi/');
  }).then((response) => {
    pu_WABI = response.data[0].price_usd;
    ps_WABI = response.data[0].price_btc;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/cryptoping/');
  }).then((response) => {
    pu_PING = response.data[0].price_usd;
    ps_PING = response.data[0].price_btc;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/raiden-network-token/');
  }).then((response) => {
    pu_RDN = response.data[0].price_usd;
    ps_RDN = response.data[0].price_btc;
    return axios.get('https://api.coinmarketcap.com/v1/ticker/omisego/');
  }).then((response) => {
    pu_OMG = response.data[0].price_usd;
    ps_OMG = response.data[0].price_btc;
    res.render('home.hbs', {
      pu_BTC,
      pu_MIOTA: Number(Math.round(pu_MIOTA+'e2')+'e-2'),
      pu_POWR: Number(Math.round(pu_POWR+'e2')+'e-2'),
      pu_ARDR: Number(Math.round(pu_ARDR+'e2')+'e-2'),
      pu_RDN: Number(Math.round(pu_RDN+'e2')+'e-2'),
      pu_OMG: Number(Math.round(pu_OMG+'e2')+'e-2'),
      pu_WABI: Number(Math.round(pu_WABI+'e2')+'e-2'),
      pu_PING: Number(Math.round(pu_PING+'e2')+'e-2'),
      ps_MIOTA: Math.floor(ps_MIOTA * 100000000),
      ps_POWR: Math.floor(ps_POWR * 100000000),
      ps_ARDR: Math.floor(ps_ARDR * 100000000),
      ps_RDN: Math.floor(ps_RDN * 100000000),
      ps_OMG: Math.floor(ps_OMG * 100000000),
      ps_WABI: Math.floor(ps_WABI * 100000000),
      ps_PING: Math.floor(ps_PING * 100000000)
    });
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers.');
    } else {
      console.log(e.message);
    }
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: "Error!"
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
