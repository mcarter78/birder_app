var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    routes = require('./config/routes'),
    mongoose = require('mongoose');

mongoose.connect('mongodb://heroku_qglsk5n8:96p6s4efgo9ekejnehpn1ecd7j@ds015334.mlab.com:15334/heroku_qglsk5n8');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.use(logger('dev'));
app.use(routes);

app.listen(port, function() {
  console.log('listening on port:', port);
});
