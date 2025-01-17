var thinky = require('../db/config');
var r = thinky.r;
var Entry = require('../models/entry');
var User = require('../models/user');

var entriesController = {
  all: function(req, res) {
    var id = req.params.id;
    Entry.get(id)
      .then(function(entry) {
        res.json(entry);
        });
  },
  show: function(req, res) {
    var id = req.params.id;
    Entry.get(id)
      .then(function(entry) {
        res.json(entry);
      });
  },
  create: function(req, res) {
    var id = req.body.userId;
    var newEntry = req.body;
    console.log(newEntry);
    User.get(id)
      .then(function(user) {
        Entry.save(newEntry)
        .then(function(entry) {
          user.entries.push(entry);
          user.saveAll()
            .then(function() {
              console.log(user);
              res.json(user);
            });
        });
      });
  },
  update: function(req, res) {
    console.log('updating');
    var id = req.params.id;
    Entry.get(id)
      .then(function(entry) {
        if (req.body.userId) entry.userId = req.body.userId;
        if (req.body.birdId) entry.birdId = req.body.birdId;
        if (req.body.name) entry.name = req.body.name;
        if (req.body.picture) entry.picture = req.body.picture;
        if (req.body.city) entry.city = req.body.city;
        if (req.body.location) entry.location = req.body.location;
        if (req.body.coords) entry.coords = req.body.coords;
        if (req.body.date) entry.date = req.body.date;
        if (req.body.remarks) entry.remarks = req.body.remarks;
        User.get(entry.userId).getJoin({entries:true}).run()
          .then(function(user) {
            user.entries.forEach(function(index) {
              if (index.id === entry.id) {
                user.entries.splice(index, 1);
                user.entries.push(entry);
              }
            });
          });
        entry.saveAll()
          .then(function(updEntry) {
            res.json(updEntry);
          });
      });
  },
  delete: function(req, res) {
    // TODO: Get user, THEN the entry
    // Delete on Entry model, then splice from user.entries
    var id = req.params.id;
    Entry.get(id)
      .then(function(entry){
        User.get(entry.userId).getJoin().run()
          .then(function(user) {
            user.entries.forEach(function(index) {
              if (index.id === entry.id) {
                user.entries.splice(index, 1);
              }
            });
          });
        entry.delete()
          .then(function(delEntry) {
            res.json(delEntry);
          });
      });
  }
};

module.exports = entriesController;
