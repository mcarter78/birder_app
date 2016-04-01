var thinky = require('../db/config');
var r = thinky.r;
var User = require('../models/user');
var Entry = require('../models/entry');

var usersController = {
  all: function(req, res) {
    console.log('indexing');
    User.orderBy({ index: r.asc('date')})
      .run()
      .then(function(users){
        res.json(users);
      });
  },
  show: function(req, res) {
    var id = req.params.id;
    User.get(id)
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
    var id = req.user;
    var updatedUser = req.body;
    User.get(id)
      .then(function(user) {
        user.save(updatedUser).run()
          .then(function(updUser) {
            res.json(updUser);
          });
      });
  },
  delete: function(req, res) {
    var id = req.user;
    User.get(id)
      .then(function(user){
        user.delete().run()
          .then(function(delUser) {
            res.json(delUser);
          });
      });
  }
};

module.exports = usersController;
