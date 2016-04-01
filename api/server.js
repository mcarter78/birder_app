var express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

app.listen(port, function() {
  console.log('listening on port:', port);
});
