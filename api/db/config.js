var thinky = require('thinky')({
  host: 'rethinkdb://x:Gg5HfgrK3TnhljtGeqPQ9HH17kAjiEAGjbYZJvhL50@aws-us-east-1-portal.13.dblayer.com',
  port: 11113,
  db: 'birder_app'
});

module.exports = thinky;
