var thinky = require('../db/config');
var r = thinky.r;
var Flickr = require("node-flickr");
var flickrKeys = require('../../secrets');
var keys = {"api_key": flickrKeys.FLICKR_API_KEY};
flickr = new Flickr(keys);


var Bird = require('../models/bird');

var birdsController = {
  getBirdImage: function(req, res) {
    var sciName = req.body.sciName;
    var data = sciName.split(' ').join(',').toString().toLowerCase();
    console.log(data);
    flickr.get("photos.search", {"tags":data, "tag_mode": "all"}, function(err, result){
      if (err) return console.error(err);
      console.log(result.photos.photo[0]);
      res.json(result.photos.photo);
});
  },
  all: function(req, res) {
    console.log('indexing');
    Bird.orderBy({ index: r.asc('orderName')})
      .run()
      .then(function(birds){
        res.json(birds);
      });
  },
  show: function(req, res) {
    var id = req.params.id;
    Bird.get(id)
      .then(function(bird) {
        res.json(bird);
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
