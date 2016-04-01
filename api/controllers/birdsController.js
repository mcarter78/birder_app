var thinky = require('../db/config');
var r = thinky.r;

var Bird = require('../models/bird');

var birdsController = {
  all: function(req, res) {
    console.log('indexing');
    Bird.orderBy({ index: r.asc('orderName')})
      .run()
      .then(function(birds){
        res.json(birds);
      });
  },
  create: function(req, res) {
    var newBird = req.body;
    console.log(newBird);
    Bird.save(newBird)
      .then(function(bird) {
        res.json(bird);
      });
  }
};

module.exports = birdsController;
