var thinky = require('../db/config');
var Bird = require('./bird');

var Entry = thinky.createModel('Entry', {
  id: String,
  userId: String,
  birdId: String,
  location: String,
  date: Date,
  remarks: String
});

Entry.ensureIndex('date');

Entry.belongsTo(Bird, 'bird', 'birdId', 'id');

module.exports = Entry;
