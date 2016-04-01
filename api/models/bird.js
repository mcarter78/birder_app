var thinky = require('../db/config');

var Bird = thinky.createModel('Bird', {
  id: String,
  sci_name: String,
  common_name: String,
  order_name: String,
  birdImageUrl: String,
  timesSeen: Number
});

Bird.ensureIndex('orderName');

module.exports = Bird;
