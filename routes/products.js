const router = require('express').Router();
const products = require('./../products');
const httpStatus = require('http-status-codes');

router.get('/', (req, res) => {
  res.send(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const itens = products.filter(product => product.id == id);
  if (!itens.length) {
    res.statusCode = httpStatus.NO_CONTENT;
    res.send(null);
    return;
  }
  res.send(itens[0]);
});

module.exports = router;