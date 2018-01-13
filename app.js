const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

const mainRoutes = require('./routes');
const liteRoutes = require('./routes/lite.js');

app.use(mainRoutes);
app.use('/lite', liteRoutes);

app.listen(port);
