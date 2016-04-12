var thinky = require('thinky')({
  host: 'aws-us-east-1-portal.12.dblayer.com',
  port: '11113',
  authKey: 'Gg5HfgrK3TnhljtGeqPQ9HH17kAjiEAGjbYZJvhL50',
  db: 'birder_app'
});

var r = thinky.r;
var fs = require('fs');

fs.readFile('./cacert', function(err, caCert) {
  r.connect({
    host: 'aws-us-east-1-portal.12.dblayer.com',
    port: 11113,
    authKey: 'Gg5HfgrK3TnhljtGeqPQ9HH17kAjiEAGjbYZJvhL50',
    ssl: {
      ca: caCert
    }
  }, function(error, conn) {
    r.dbList().run(conn, function(err, results) {
      console.log(results);
    });
  });
});

module.exports = thinky;
