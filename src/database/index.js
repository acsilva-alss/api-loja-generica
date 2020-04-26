const mongoose = require('mongoose');

// Criando conexão com o mongo
mongoose.connect('mongodb://localhost/cadastroProdutos', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(response=>console.log('Conected to Database..'))
.catch(error=> console.log('error ->', error.message));

mongoose.Promise = global.Promise;

module.exports = mongoose;

