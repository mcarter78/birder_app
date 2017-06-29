require('dotenv').config();

var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 5000,
    routes = require('./config/routes'),
    setupPassport = require('./passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    RedisStore = require('connect-redis')(session),
    mongoose = require('mongoose');

// Production database URI
// mongoose.connect('mongodb://heroku_qglsk5n8:96p6s4efgo9ekejnehpn1ecd7j@ds015334.mlab.com:15334/heroku_qglsk5n8');

// Dev database URI
mongoose.connect('mongodb://localhost/birdspots');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.use(logger('dev'));
app.use(routes);

app.use(cookieParser());
app.use(session({
  store: new RedisStore({
    host: process.env.REDIS_IP,
    port: process.env.REDIS_PORT,
    // password: process.env.REDIS_PASSWORD,
    logErrors: true
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
  }));

setupPassport(app);

app.listen(port, function() {
  console.log('listening on port:', port);
});
