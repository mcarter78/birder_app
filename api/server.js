require('dotenv').config();

const express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 5000,
    routes = require('./config/routes'),
    setupPassport = require('./passport'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    sessionConfig = require('./session');

// Production database URI
// mongoose.connect('mongodb://heroku_qglsk5n8:96p6s4efgo9ekejnehpn1ecd7j@ds015334.mlab.com:15334/heroku_qglsk5n8');

// Dev database URI
mongoose.connect('mongodb://localhost/birdspots');

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../build'));
app.use(logger('dev'));

app.use(cookieParser());
// Uncomment if planning to switch to sessions instead of JWT
// sessionConfig(app);
setupPassport(app);
app.use(routes);

app.listen(port, function() {
  console.log('listening on port:', port);
});
