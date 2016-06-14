var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EntrySchema = new Schema({
  userId: String,
  birdId: String,
  name: String,
  city: String,
  picture: String,
  coords: Array,
  location: String,
  date: Date,
  remarks: String
});

var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;
