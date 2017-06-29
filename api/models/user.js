var mongoose = require('mongoose');
var EntrySchema = require('./entry').schema;

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: { type: String, required: true },
  googleId: String,
  facebookId: String,
  picture: String,
  aboutMe: String,
  date: { type: Date, default: Date.now() },
  entries: [EntrySchema]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
