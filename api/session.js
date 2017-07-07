const session = require('express-session');
const RedisStore = require('connect-redis')(session);

function sessionConfig(app) {
  app.use(session({
    store: new RedisStore({
      host: process.env.REDIS_IP,
      port: process.env.REDIS_PORT,
      // password: process.env.REDIS_PASSWORD,
      logErrors: true,
      ttl: (1 * 60 * 60)
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    name: 'id',
    cookie: {
      path: '/',
      httpOnly: true,
      // TODO: Uncomment next line once HTTPS is set up
      // secure: true,
      maxAge: 1800000
    }
  }));
  session.Session.prototype.login = function(user, cb) {
    const req = this.req;
    req.session.regenerate((err) => {
      if (err) cb(err);
    });
    req.session.userInfo = user;
    cb();
  };
}

module.exports = sessionConfig;
