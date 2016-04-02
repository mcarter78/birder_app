var thinky = require('../db/config');
var Bird = require('./bird');
var User = require('./user');

var Entry = thinky.createModel('Entry', {
  id: String,
  userId: String,
  birdId: String,
  location: String,
  date: Date,
  remarks: String
});

Entry.ensureIndex('date');

Entry.hasOne(Bird, 'bird', 'birdId', 'id');

module.exports = Entry;
