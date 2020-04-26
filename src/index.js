//importando pacotes
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
require('dotenv/config');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(process.env.PORT || 3000);

