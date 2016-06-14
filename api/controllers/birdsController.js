var Flickr = require("node-flickr");
var flickrKeys = require('../../secrets');
var keys = {"api_key": flickrKeys.FLICKR_API_KEY};
flickr = new Flickr(keys);

var Bird = require('../models/bird');

var birdsController = {
  getBirdImage: function(req, res) {
    var sciName = req.body.sciName;
    var data = sciName.split(' ').join(',').toString().toLowerCase();
    flickr.get("photos.search", {"tags":data, "tag_mode": "all"}, function(err, result){
      if (err) return console.error(err);
      res.json(result.photos.photo);
    });
  },
  all: function(req, res) {
    console.log('indexing');
    Bird.find({}, function(err, birds) {
      if(err) console.log(err);
      res.json(birds);
    });
  },
  show: function(req, res) {
    var id = req.params.id;
    Bird.findById(id, function(err, bird) {
      if(err) console.log(err);
      res.json(bird);
    });
  },
  create: function(req, res) {
    var newBird = req.body;
    console.log(newBird);
    Bird.create(newBird, function(err, bird) {
      if(err) console.log(err);
      res.json(bird);
    });
  }
};

module.exports = birdsController;
