var User = require('../models/user');
var Entry = require('../models/entry');

var usersController = {
  all: function(req, res) {
    console.log('indexing');
    User.find({}, function(err, users) {
      if(err) console.log(err);
      res.json(users);
    });
  },
  show: function(req, res) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
      if(err) console.log(err);
      res.json(user);
    });
  },
  create: function(req, res) {
    var newUser = req.body;
    User.create(newUser, function(err, user) {
      if(err) console.log(err);
      res.json(user);
    });
  },
  update: function(req, res) {
    console.log('updating');
    var id = req.params.id;
    User.findById(id, function(err, user) {
      if(err) console.log(err);
      if (req.body.aboutMe) user.aboutMe = req.body.aboutMe;
      user.save(function(err, updatedUser) {
        if(err) console.log(err);
        res.json(updatedUser);
      });
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    User.findById(id, function(err, user) {
      if(err) console.log(err);
      user.remove(function(err, data) {
        if(err) console.log(err);
        res.json(data);
      });
    });
  }
};

module.exports = usersController;
