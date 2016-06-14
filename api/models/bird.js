var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BirdSchema = new Schema({
  sciName: String,
  commonName: String,
  orderName: String,
  birdImageUrl: String,
  timesSeen: Number
});

var Bird = mongoose.model('Bird', BirdSchema);

module.exports = Bird;
