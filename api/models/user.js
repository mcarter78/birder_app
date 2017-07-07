var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var EntrySchema = require('./entry').schema;

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  salt: String,
  googleId: String,
  facebookId: String,
  picture: String,
  aboutMe: String,
  date: { type: Date, default: Date.now() },
  entries: [EntrySchema]
});

UserSchema.pre('save', function(next) {
  var user = this;
  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    // Store the salt
    user.salt = salt;
    // Hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // Override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
