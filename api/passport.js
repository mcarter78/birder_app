var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    GoogleStrategy = require('passport-google-oauth20'),
    FacebookStrategy = require('passport-facebook'),
    bcrypt = require('bcrypt'),
    User = require('./models/user');

module.exports = function(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    function(email, password, done) {
      User.find({'email': email})
        .then(function (user) {
          if (user === null) {
            return done(null, false, { message: 'Incorrect credentials.' });
          }

        var hashedPassword = bcrypt.hashSync(password, user.salt);

        if (user.password === hashedPassword) {
          console.log('user authenticated');
          return done(null, user);
        }

        return done(null, false, { message: 'Incorrect credentials.' });
      });
    }
  ));

  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // TODO: fix with production URL
    callbackURL: 'http://127.0.0.1:3000/oauth/google',
    passReqToCallback: true
  },
    function(req, accessToken, refreshToken, profile, cb) {
      console.log('Google Profile:', profile);
      var password = 'monitorwastepaperluigi';
      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(password, salt);
      var account = {
        googleId: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        salt: salt,
        password: hashedPassword
      };
      User.find({ email: account.email }, (_account) => {
        if (_account) {
          _account.update({ googleId: profile.id }).then(function(updAccount) {
            return cb(null, updAccount);
          });
        } else {
          User.find({ googleId: profile.id }, (acct) => {
            if (acct) {
              return cb(null, acct);
            } else {
              User.create(account, (_acct) => {
                return cb(null, _acct);
              });
            }
          });
        }
      });
    }
  ));

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    // TODO: fix with production URL
    callbackURL: 'http://127.0.0.1:3000/oauth/facebook'
  },
    function(req, accessToken, refreshToken, profile, cb) {
      console.log('Facebook Profile:', profile);
      var password = 'monitorwastepaperluigi';
      var salt = bcrypt.genSaltSync(10);
      var hashedPassword = bcrypt.hashSync(password, salt);
      var account = {
        facebookId: profile.id,
        username: profile.name,
        email: profile.email,
        salt: salt,
        password: hashedPassword
      };
      User.find({ email: account.email })
        .then(function(_account) {
          if(_account) {
            _account.update({ facebookId: profile.id }).then(function(updAccount) {
              return cb(null, updAccount);
            });
          } else {
            User.find({ facebookId: profile.id })
              .then(function(acct) {
                if(acct) {
                  return cb(null, acct);
                } else {
                  User.create(account)
                    .then(function(_acct) {
                      return cb(null, _acct);
                  });
                }
            });
          }
      });
    }
  ));

  passport.serializeUser(function(user, done) {
    console.log('Serializing user:', user.id);
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id)
      .then(function (user) {
        if (user === null) {
          done(new Error('Wrong user id.'));
        }
        console.log('Deserializing user:', user.id);
        done(null, user);
      });

  });
};
