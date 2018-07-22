const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Bem vindo ao Curso de Node + Angular');
});

module.exports = router;