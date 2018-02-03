const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=300';
let currencies;

let btcObj;
let powrObj;
let ardrObj;
let wabiObj;
let thcObj;
let nulsObj;

let ethObj;
let xrpObj;
let miotaObj;
let adaObj;
let ltcObj;
let omgObj;
let icxObj;
let rdnObj;
let mcoObj;
let subObj;
let lendObj;
let lunObj;

const coinNames = [
  'bitcoin', 'power-ledger', 'ardor', 'wabi', 'hempcoin', 'nuls',
  'ethereum', 'ripple', 'iota', 'cardano', 'litecoin', 'omisego',
  'icon', 'raiden-network-token', 'monaco', 'substratum', 'ethlend', 'lunyr'
];
let coinsData = {};
let assignCoinData = (name) => {
  coinsData[name] = currencies.find(currency => (currency.id === name));
};

router.get('/', (req, res) => {
  if (currencies != undefined) {
    res.render('home.hbs', {
      pu_BTC: Number(Math.round(coinsData.bitcoin.price_usd+'e2')+'e-2'),
      pu_POWR: Number(Math.round(coinsData['power-ledger'].price_usd+'e2')+'e-2'),
      pu_ARDR: Number(Math.round(coinsData.ardor.price_usd+'e2')+'e-2'),
      pu_WABI: Number(Math.round(coinsData.wabi.price_usd+'e2')+'e-2'),
      pu_THC: Number(Math.round(coinsData.hempcoin.price_usd+'e2')+'e-2'),
      pu_NULS: Number(Math.round(coinsData.nuls.price_usd+'e2')+'e-2'),
      ps_POWR: Math.floor(coinsData['power-ledger'].price_btc * 100000000),
      ps_ARDR: Math.floor(coinsData.ardor.price_btc * 100000000),
      ps_WABI: Math.floor(coinsData.wabi.price_btc * 100000000),
      ps_THC: Math.floor(coinsData.hempcoin.price_btc * 100000000),
      ps_NULS: Math.floor(coinsData.nuls.price_btc * 100000000),
      ch_BTC: coinsData.bitcoin.percent_change_24h,
      ch_POWR: coinsData['power-ledger'].percent_change_24h,
      ch_ARDR: coinsData.ardor.percent_change_24h,
      ch_WABI: coinsData.wabi.percent_change_24h,
      ch_THC: coinsData.hempcoin.percent_change_24h,
      ch_NULS: coinsData.nuls.percent_change_24h
    });
  } else {
    axios.get(API_URL).then((response) => {
      currencies = response.data;
      for (name of coinNames) {
        assignCoinData(name);
      }

      res.render('home.hbs', {
        pu_BTC: Number(Math.round(coinsData.bitcoin.price_usd+'e2')+'e-2'),
        pu_POWR: Number(Math.round(coinsData['power-ledger'].price_usd+'e2')+'e-2'),
        pu_ARDR: Number(Math.round(coinsData.ardor.price_usd+'e2')+'e-2'),
        pu_WABI: Number(Math.round(coinsData.wabi.price_usd+'e2')+'e-2'),
        pu_THC: Number(Math.round(coinsData.hempcoin.price_usd+'e2')+'e-2'),
        pu_NULS: Number(Math.round(coinsData.nuls.price_usd+'e2')+'e-2'),
        ps_POWR: Math.floor(coinsData['power-ledger'].price_btc * 100000000),
        ps_ARDR: Math.floor(coinsData.ardor.price_btc * 100000000),
        ps_WABI: Math.floor(coinsData.wabi.price_btc * 100000000),
        ps_THC: Math.floor(coinsData.hempcoin.price_btc * 100000000),
        ps_NULS: Math.floor(coinsData.nuls.price_btc * 100000000),
        ch_BTC: coinsData.bitcoin.percent_change_24h,
        ch_POWR: coinsData['power-ledger'].percent_change_24h,
        ch_ARDR: coinsData.ardor.percent_change_24h,
        ch_WABI: coinsData.wabi.percent_change_24h,
        ch_THC: coinsData.hempcoin.percent_change_24h,
        ch_NULS: coinsData.nuls.percent_change_24h
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

router.get('/watching', (req, res) => {
  if (currencies != undefined) {
    res.render('watching.hbs', {
      pu_ETH: Number(Math.round(coinsData.ethereum.price_usd+'e2')+'e-2'),
      pu_XRP: Number(Math.round(coinsData.ripple.price_usd+'e2')+'e-2'),
      pu_MIOTA: Number(Math.round(coinsData.iota.price_usd+'e2')+'e-2'),
      pu_ADA: coinsData.cardano.price_usd,
      pu_LTC: Number(Math.round(coinsData.litecoin.price_usd+'e2')+'e-2'),
      pu_OMG: Number(Math.round(coinsData.omisego.price_usd+'e2')+'e-2'),
      pu_ICX: Number(Math.round(coinsData.icon.price_usd+'e2')+'e-2'),
      pu_RDN: Number(Math.round(coinsData['raiden-network-token'].price_usd+'e2')+'e-2'),
      pu_MCO: Number(Math.round(coinsData.monaco.price_usd+'e2')+'e-2'),
      pu_SUB: coinsData.substratum.price_usd,
      pu_LEND: coinsData.ethlend.price_usd,
      pu_LUN: Number(Math.round(coinsData.lunyr.price_usd+'e2')+'e-2'),
      ps_ETH: Math.floor(coinsData.ethereum.price_btc * 100000000),
      ps_XRP: Math.floor(coinsData.ripple.price_btc * 100000000),
      ps_MIOTA: Math.floor(coinsData.iota.price_btc * 100000000),
      ps_ADA: Math.floor(coinsData.cardano.price_btc * 100000000),
      ps_LTC: Math.floor(coinsData.litecoin.price_btc * 100000000),
      ps_OMG: Math.floor(coinsData.omisego.price_btc * 100000000),
      ps_ICX: Math.floor(coinsData.icon.price_btc * 100000000),
      ps_RDN: Math.floor(coinsData['raiden-network-token'].price_btc * 100000000),
      ps_MCO: Math.floor(coinsData.monaco.price_btc * 100000000),
      ps_LEND: Math.floor(coinsData.ethlend.price_btc * 100000000),
      ps_SUB: Math.floor(coinsData.substratum.price_btc * 100000000),
      ps_LUN: Math.floor(coinsData.lunyr.price_btc * 100000000),
      ch_ETH: coinsData.ethereum.percent_change_24h,
      ch_XRP: coinsData.ripple.percent_change_24h,
      ch_MIOTA: coinsData.iota.percent_change_24h,
      ch_ADA: coinsData.cardano.percent_change_24h,
      ch_LTC: coinsData.litecoin.percent_change_24h,
      ch_OMG: coinsData.omisego.percent_change_24h,
      ch_ICX: coinsData.icon.percent_change_24h,
      ch_RDN: coinsData['raiden-network-token'].percent_change_24h,
      ch_MCO: coinsData.monaco.percent_change_24h,
      ch_LEND: coinsData.ethlend.percent_change_24h,
      ch_SUB: coinsData.substratum.percent_change_24h,
      ch_LUN: coinsData.lunyr.percent_change_24h
    });
  } else {
    axios.get(API_URL).then((response) => {
      currencies = response.data;
      for (name of coinNames) {
        assignCoinData(name);
      }

      res.render('watching.hbs', {
        pu_ETH: Number(Math.round(coinsData.ethereum.price_usd+'e2')+'e-2'),
        pu_XRP: Number(Math.round(coinsData.ripple.price_usd+'e2')+'e-2'),
        pu_MIOTA: Number(Math.round(coinsData.iota.price_usd+'e2')+'e-2'),
        pu_ADA: coinsData.cardano.price_usd,
        pu_LTC: Number(Math.round(coinsData.litecoin.price_usd+'e2')+'e-2'),
        pu_OMG: Number(Math.round(coinsData.omisego.price_usd+'e2')+'e-2'),
        pu_ICX: Number(Math.round(coinsData.icon.price_usd+'e2')+'e-2'),
        pu_RDN: Number(Math.round(coinsData['raiden-network-token'].price_usd+'e2')+'e-2'),
        pu_MCO: Number(Math.round(coinsData.monaco.price_usd+'e2')+'e-2'),
        pu_SUB: coinsData.substratum.price_usd,
        pu_LEND: coinsData.ethlend.price_usd,
        pu_LUN: Number(Math.round(coinsData.lunyr.price_usd+'e2')+'e-2'),
        ps_ETH: Math.floor(coinsData.ethereum.price_btc * 100000000),
        ps_XRP: Math.floor(coinsData.ripple.price_btc * 100000000),
        ps_MIOTA: Math.floor(coinsData.iota.price_btc * 100000000),
        ps_ADA: Math.floor(coinsData.cardano.price_btc * 100000000),
        ps_LTC: Math.floor(coinsData.litecoin.price_btc * 100000000),
        ps_OMG: Math.floor(coinsData.omisego.price_btc * 100000000),
        ps_ICX: Math.floor(coinsData.icon.price_btc * 100000000),
        ps_RDN: Math.floor(coinsData['raiden-network-token'].price_btc * 100000000),
        ps_MCO: Math.floor(coinsData.monaco.price_btc * 100000000),
        ps_LEND: Math.floor(coinsData.ethlend.price_btc * 100000000),
        ps_SUB: Math.floor(coinsData.substratum.price_btc * 100000000),
        ps_LUN: Math.floor(coinsData.lunyr.price_btc * 100000000),
        ch_ETH: coinsData.ethereum.percent_change_24h,
        ch_XRP: coinsData.ripple.percent_change_24h,
        ch_MIOTA: coinsData.iota.percent_change_24h,
        ch_ADA: coinsData.cardano.percent_change_24h,
        ch_LTC: coinsData.litecoin.percent_change_24h,
        ch_OMG: coinsData.omisego.percent_change_24h,
        ch_ICX: coinsData.icon.percent_change_24h,
        ch_RDN: coinsData['raiden-network-token'].percent_change_24h,
        ch_MCO: coinsData.monaco.percent_change_24h,
        ch_LEND: coinsData.ethlend.percent_change_24h,
        ch_SUB: coinsData.substratum.percent_change_24h,
        ch_LUN: coinsData.lunyr.percent_change_24h
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

module.exports = router;
