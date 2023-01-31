const express = require('express');
const app = express();
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a la página del MUSEO DE CIENCIAS NATURALES DE RIO NEGRO');
});

app.use('/', router);


  

module.exports = router;