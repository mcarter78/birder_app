var thinky = require('../db/config');
var r = thinky.r;
var Entry = require('../models/entry');
var User = require('../models/user');

var entriesController = {
  all: function(req, res) {
    console.log('indexing');
    Entry.orderBy({ index: r.desc('date')})
      .run()
      .then(function(entries){
        res.json(entries);
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
    var newEntry = req.body;
    console.log(newEntry);
    Entry.save(newEntry)
      .then(function(entry) {
        res.json(entry);
      });
  },
  update: function(req, res) {
    var id = req.params.id;
    var updatedEntry = req.body;
    Entry.get(id)
      .then(function(entry) {
        entry.save(updatedEntry).run()
          .then(function(updEntry) {
            res.json(updEntry);
          });
      });
  },
  delete: function(req, res) {
    var id = req.params.id;
    Entry.get(id)
      .then(function(entry){
        entry.delete().run()
          .then(function(delEntry) {
            res.json(delEntry);
          });
      });
  }
};

module.exports = entriesController;
