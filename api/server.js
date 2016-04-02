var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    routes = require('./config/routes');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));
app.use(logger('dev'));
app.use(routes);

app.listen(port, function() {
  console.log('listening on port:', port);
});
