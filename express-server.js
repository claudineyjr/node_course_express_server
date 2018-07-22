const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

app.use('/', require('./routes/index'));
app.use('/products', require('./routes/products'));