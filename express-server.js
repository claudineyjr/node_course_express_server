const express = require('express');
const app = express();
const products = require('./products');
const httpStatus = require('http-status-codes');

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const itens = products.filter(product => product.id == id);
  if (!itens.length) {
    res.statusCode = httpStatus.NO_CONTENT;
    res.send(null);
    return;
  }
  res.send(itens[0]);
});



