var thinky = require('../db/config');
var Entry = require('./entry');

var r = thinky.r;

var User = thinky.createModel('User', {
  username: String,
  passwordDigest: String,
  avatarImage: String,
  aboutMe: String,
  date: { _type: Date, default: r.now() }
});

User.ensureIndex('date');

User.hasMany(Entry, 'entries', 'id', 'userId');

module.exports = User;
