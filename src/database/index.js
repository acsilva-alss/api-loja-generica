const mongoose = require('mongoose');
require('dotenv/config');

// Criando conexão com o mongo
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(response=>console.log('Conected to Database..'))
.catch(error=> console.log('error ->', error.message));

mongoose.Promise = global.Promise;

module.exports = mongoose;

