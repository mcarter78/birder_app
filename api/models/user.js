var thinky = require('../db/config');
var Entry = require('./entry');

var r = thinky.r;

var User = thinky.createModel('User', {
  id: String,
  name: String,
  email: String,
  picture: String,
  aboutMe: String,
  date: { _type: Date, default: r.now() },
  entries: { _type: Array, default: []}
});

User.ensureIndex('date');

User.hasMany(Entry, 'entries', 'id', 'userId');

module.exports = User;
