const express = require('express');
const compression = require('compression');
const hbs = require('hbs');
const mainRoutes = require('./routers');
const liteRoutes = require('./routers/lite.js');

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials('views/partials');
hbs.registerHelper('toUpperCase', string => string.toUpperCase());
hbs.registerHelper("evaluateIfBitcoin", function(id, usd, btc) {
  if (id === 'bitcoin') {
    return new hbs.SafeString("<td>&dollar;" + usd + "</td>");
  } else {
    return new hbs.SafeString("<td>&dollar;" + usd + " / " + btc + "</td>");
  }
});
app.set('view engine', 'hbs');
app.use(compression());
app.use(express.static('public'));

app.use(mainRoutes);
app.use('/lite', liteRoutes);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});