var thinky = require('../db/config');
var r = thinky.r;
var User = require('../models/user');
var Entry = require('../models/entry');

var usersController = {
  all: function(req, res) {
    console.log('indexing');
    User.orderBy({ index: r.asc('date')}).getJoin({entries:true})
      .run()
      .then(function(users){
        res.json(users);
      });
  },
  show: function(req, res) {
    var id = req.params.id;
    User.get(id).getJoin({entries:true})
      .then(function(user) {
        res.json(user);
      });
  },
  create: function(req, res) {
    var newUser = req.body;
    User.save(newUser)
      .then(function(user) {
        console.log(user);
        res.json(user);
      });
  },
  update: function(req, res) {
    console.log('updating');
    var id = req.params.id;
    User.get(id).getJoin({entries:true}).run()
      .then(function(user) {
        if (req.body.username) user.username = req.body.username;
        if (req.body.avatarImage) user.avatarImage = req.body.avatarImage;
        if (req.body.aboutMe) user.aboutMe = req.body.aboutMe;
        user.saveAll()
          .then(function(updUser) {
            res.json(updUser);
          });
      });
  },
  delete: function(req, res) {
    var id = req.params.id;
    User.get(id).getJoin({entries:true}).run()
      .then(function(user){
        user.deleteAll({entries:true})
          .then(function(delUser) {
            res.json(delUser);
          });
      });
  }
};

module.exports = usersController;
