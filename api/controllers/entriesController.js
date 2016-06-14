var Entry = require('../models/entry');
var User = require('../models/user');

var entriesController = {
  all: function(req, res) {
    var id = req.params.id;
    Entry.find({userId: id}, function(err, entries) {
      if(err) console.log(err);
      res.json(entries);
    });
  },
  show: function(req, res) {
    var id = req.params.id;
    Entry.findById(id, function(err, entry) {
      if(err) console.log(err);
      res.json(entry);
    });
  },
  create: function(req, res) {
    var id = req.body.userId;
    var newEntry = req.body;
    console.log(newEntry);
    User.findById(id, function(err, user) {
      if(err) console.log(err);
      Entry.create(newEntry, function(err, entry) {
        if(err) console.log(err);
        user.entries.push(entry);
        user.save(function(err, updatedUser) {
          if(err) console.log(err);
          res.json(user);
        });
      });
    });
  },
  update: function(req, res) {
    console.log('updating');
    var id = req.params.id;
    Entry.findById(id, function(err, entry) {
      if(err) console.log(err);
      if (req.body.userId) entry.userId = req.body.userId;
      if (req.body.birdId) entry.birdId = req.body.birdId;
      if (req.body.name) entry.name = req.body.name;
      if (req.body.picture) entry.picture = req.body.picture;
      if (req.body.city) entry.city = req.body.city;
      if (req.body.location) entry.location = req.body.location;
      if (req.body.coords) entry.coords = req.body.coords;
      if (req.body.date) entry.date = req.body.date;
      if (req.body.remarks) entry.remarks = req.body.remarks;
      User.findById({_id: entry.userId}, function(err, user) {
        if(err) console.log(err);
        user.entries.forEach(function(index) {
          if (index.id === entry.id) {
            user.entries.splice(index, 1);
            user.entries.push(entry);
          }
          user.save(function(err, updatedUser) {
            if(err) console.log(err);
            entry.save(function(err, updatedEntry) {
              if(err) console.log(err);
              res.json(updatedEntry);
            });
          });
        });
      });
    });
  },
  delete: function(req, res) {
    // TODO: Get user, THEN the entry
    // Delete on Entry model, then splice from user.entries
  }
};

module.exports = entriesController;
