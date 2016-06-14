var fs = require('fs');
var contents = fs.readFileSync('api/db/cacert.txt').toString();

var thinky = require('thinky')({
  host: 'aws-us-east-1-portal.13.dblayer.com',
  port: '11113',
  authKey: 'Gg5HfgrK3TnhljtGeqPQ9HH17kAjiEAGjbYZJvhL50',
  ssl: {
    ca: contents
  },
  db: 'birder_app'
});

module.exports = thinky;
