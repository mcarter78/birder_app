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





// fs.readFile('./cacert', function(err, caCert) {
//   r.connect({
//     host: 'aws-us-east-1-portal.13.dblayer.com',
//     port: 11113,
//     authKey: 'Gg5HfgrK3TnhljtGeqPQ9HH17kAjiEAGjbYZJvhL50',
//     ssl: {
//       ca: caCert
//     }
//   }, function(error, conn) {
//     r.dbList().run(conn, function(err, results) {
//       console.log(results);
//     });
//   });
// });
