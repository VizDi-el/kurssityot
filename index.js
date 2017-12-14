var express = require('express');
var router = express.Router();
var app = express();


app.get('/', function (req, res) {
res.render('index', { title: 'Logga in',})
});
module.exports = app;
