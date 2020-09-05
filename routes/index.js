var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/clase1', function(req, res, next) {
  res.render('clase1', { title: 'Mercado Liebre' });
});

router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registro' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Registro' });
});


module.exports = router;
