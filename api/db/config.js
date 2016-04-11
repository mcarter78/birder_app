var thinky = require('thinky')({
  host: 'rethinkdb://aws-us-east-1-portal.12.dblayer.com',
  port: '11113',
  authKey: 'Gg5HfgrK3TnhljtGeqPQ9HH17kAjiEAGjbYZJvhL50',
  db: 'birder_app'
});

module.exports = thinky;
