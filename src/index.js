//importando pacotes
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3000);

