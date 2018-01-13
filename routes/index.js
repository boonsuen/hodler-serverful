const express = require('express');
const axios = require('axios');

const router = express.Router();

const API_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=600';
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
let tksObj;
let nulsObj;

let ethObj;
let xrpObj;
let adaObj;
let ltcObj;
let mcoObj;
let lendObj;
let subObj;
let lunObj;

router.get('/', (req, res) => {
  if (currencies != undefined) {
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
      pu_TKS: Number(Math.round(tksObj.price_usd+'e2')+'e-2'),
      pu_NULS: Number(Math.round(nulsObj.price_usd+'e2')+'e-2'),
      ps_MIOTA: Math.floor(miotaObj.price_btc * 100000000),
      ps_POWR: Math.floor(powrObj.price_btc * 100000000),
      ps_ARDR: Math.floor(ardrObj.price_btc * 100000000),
      ps_RDN: Math.floor(rdnObj.price_btc * 100000000),
      ps_OMG: Math.floor(omgObj.price_btc * 100000000),
      ps_WABI: Math.floor(wabiObj.price_btc * 100000000),
      ps_ICX: Math.floor(icxObj.price_btc * 100000000),
      ps_THC: Math.floor(thcObj.price_btc * 100000000),
      ps_TKS: Math.floor(tksObj.price_btc * 100000000),
      ps_NULS: Math.floor(nulsObj.price_btc * 100000000),
      ch_BTC: btcObj.percent_change_24h,
      ch_MIOTA: miotaObj.percent_change_24h,
      ch_POWR: powrObj.percent_change_24h,
      ch_ARDR: ardrObj.percent_change_24h,
      ch_RDN: rdnObj.percent_change_24h,
      ch_OMG: omgObj.percent_change_24h,
      ch_WABI: wabiObj.percent_change_24h,
      ch_ICX: icxObj.percent_change_24h,
      ch_THC: thcObj.percent_change_24h,
      ch_TKS: tksObj.percent_change_24h,
      ch_NULS: nulsObj.percent_change_24h
    });
  } else {
    axios.get(API_URL).then((response) => {
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
      tksObj = currencies.find(currency => (currency.id === 'tokes'));
      nulsObj = currencies.find(currency => (currency.id === 'nuls'));
      ethObj = currencies.find(currency => (currency.id === 'ethereum'));
      xrpObj = currencies.find(currency => (currency.id === 'ripple'));
      adaObj = currencies.find(currency => (currency.id === 'cardano'));
      ltcObj = currencies.find(currency => (currency.id === 'litecoin'));
      mcoObj = currencies.find(currency => (currency.id === 'monaco'));
      lendObj = currencies.find(currency => (currency.id === 'ethlend'));
      subObj = currencies.find(currency => (currency.id === 'substratum'));
      lunObj = currencies.find(currency => (currency.id === 'lunyr'));
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
        pu_TKS: Number(Math.round(tksObj.price_usd+'e2')+'e-2'),
        pu_NULS: Number(Math.round(nulsObj.price_usd+'e2')+'e-2'),
        ps_MIOTA: Math.floor(miotaObj.price_btc * 100000000),
        ps_POWR: Math.floor(powrObj.price_btc * 100000000),
        ps_ARDR: Math.floor(ardrObj.price_btc * 100000000),
        ps_RDN: Math.floor(rdnObj.price_btc * 100000000),
        ps_OMG: Math.floor(omgObj.price_btc * 100000000),
        ps_WABI: Math.floor(wabiObj.price_btc * 100000000),
        ps_ICX: Math.floor(icxObj.price_btc * 100000000),
        ps_THC: Math.floor(thcObj.price_btc * 100000000),
        ps_TKS: Math.floor(tksObj.price_btc * 100000000),
        ps_NULS: Math.floor(nulsObj.price_btc * 100000000),
        ch_BTC: btcObj.percent_change_24h,
        ch_MIOTA: miotaObj.percent_change_24h,
        ch_POWR: powrObj.percent_change_24h,
        ch_ARDR: ardrObj.percent_change_24h,
        ch_RDN: rdnObj.percent_change_24h,
        ch_OMG: omgObj.percent_change_24h,
        ch_WABI: wabiObj.percent_change_24h,
        ch_ICX: icxObj.percent_change_24h,
        ch_THC: thcObj.percent_change_24h,
        ch_TKS: tksObj.percent_change_24h,
        ch_NULS: nulsObj.percent_change_24h
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
      pu_ETH: Number(Math.round(ethObj.price_usd+'e2')+'e-2'),
      pu_XRP: Number(Math.round(xrpObj.price_usd+'e2')+'e-2'),
      pu_ADA: adaObj.price_usd,
      pu_LTC: Number(Math.round(ltcObj.price_usd+'e2')+'e-2'),
      pu_MCO: Number(Math.round(mcoObj.price_usd+'e2')+'e-2'),
      pu_LEND: lendObj.price_usd,
      pu_SUB: subObj.price_usd,
      pu_LUN: Number(Math.round(lunObj.price_usd+'e2')+'e-2'),
      ps_ETH: Math.floor(ethObj.price_btc * 100000000),
      ps_XRP: Math.floor(xrpObj.price_btc * 100000000),
      ps_ADA: Math.floor(adaObj.price_btc * 100000000),
      ps_LTC: Math.floor(ltcObj.price_btc * 100000000),
      ps_MCO: Math.floor(mcoObj.price_btc * 100000000),
      ps_LEND: Math.floor(lendObj.price_btc * 100000000),
      ps_SUB: Math.floor(subObj.price_btc * 100000000),
      ps_LUN: Math.floor(lunObj.price_btc * 100000000),
      ch_ETH: ethObj.percent_change_24h,
      ch_XRP: xrpObj.percent_change_24h,
      ch_ADA: adaObj.percent_change_24h,
      ch_LTC: ltcObj.percent_change_24h,
      ch_MCO: mcoObj.percent_change_24h,
      ch_LEND: lendObj.percent_change_24h,
      ch_SUB: subObj.percent_change_24h,
      ch_LUN: lunObj.percent_change_24h
    });
  } else {
    axios.get(API_URL).then((response) => {
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
      tksObj = currencies.find(currency => (currency.id === 'tokes'));
      nulsObj = currencies.find(currency => (currency.id === 'nuls'));
      ethObj = currencies.find(currency => (currency.id === 'ethereum'));
      xrpObj = currencies.find(currency => (currency.id === 'ripple'));
      adaObj = currencies.find(currency => (currency.id === 'cardano'));
      ltcObj = currencies.find(currency => (currency.id === 'litecoin'));
      mcoObj = currencies.find(currency => (currency.id === 'monaco'));
      lendObj = currencies.find(currency => (currency.id === 'ethlend'));
      subObj = currencies.find(currency => (currency.id === 'substratum'));
      lunObj = currencies.find(currency => (currency.id === 'lunyr'));
      res.render('watching.hbs', {
        pu_ETH: Number(Math.round(ethObj.price_usd+'e2')+'e-2'),
        pu_XRP: Number(Math.round(xrpObj.price_usd+'e2')+'e-2'),
        pu_ADA: adaObj.price_usd,
        pu_LTC: Number(Math.round(ltcObj.price_usd+'e2')+'e-2'),
        pu_MCO: Number(Math.round(mcoObj.price_usd+'e2')+'e-2'),
        pu_LEND: lendObj.price_usd,
        pu_SUB: subObj.price_usd,
        pu_LUN: Number(Math.round(lunObj.price_usd+'e2')+'e-2'),
        ps_ETH: Math.floor(ethObj.price_btc * 100000000),
        ps_XRP: Math.floor(xrpObj.price_btc * 100000000),
        ps_ADA: Math.floor(adaObj.price_btc * 100000000),
        ps_LTC: Math.floor(ltcObj.price_btc * 100000000),
        ps_MCO: Math.floor(mcoObj.price_btc * 100000000),
        ps_LEND: Math.floor(lendObj.price_btc * 100000000),
        ps_SUB: Math.floor(subObj.price_btc * 100000000),
        ps_LUN: Math.floor(lunObj.price_btc * 100000000),
        ch_ETH: ethObj.percent_change_24h,
        ch_XRP: xrpObj.percent_change_24h,
        ch_ADA: adaObj.percent_change_24h,
        ch_LTC: ltcObj.percent_change_24h,
        ch_MCO: mcoObj.percent_change_24h,
        ch_LEND: lendObj.percent_change_24h,
        ch_SUB: subObj.percent_change_24h,
        ch_LUN: lunObj.percent_change_24h
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
