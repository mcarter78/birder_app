const express = require('express'),
      router = express.Router(),
      path = require('path'),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      usersController = require('../controllers/usersController'),
      birdsController = require('../controllers/birdsController'),
      entriesController = require('../controllers/entriesController');

// TODO: ADD AUTHENTICATION FOR ROUTES, GRAB FROM SHOWDEO

router.route('/')
  .get(function(req, res) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
  });

router.post('/api/login', passport.authenticate('local'),
  (req, res) => {
    console.log(req.user);
    const payload = { id: req.user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET);
    const response = {
      message: 'login ok',
      user: {
        email: req.user.email
      },
      token
    };
    res.json(response);
  });

// Route to test JWT
router.get('/secret', passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json('Success!');
  });


router.get('/api/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/oauth/google',
  passport.authenticate('google', {failureRedirect: '/'}), function(req, res) {
    // Successful Authentication
    res.redirect('/profile');
});

router.get('/api/auth/facebook', passport.authenticate('facebook'));

router.get('/oauth/facebook',
  passport.authenticate('facebook', {failureRedirect: '/login'}),
    function(req, res) {
      // Successful Authentication
      var user = req;
      // TODO: ONLY SEND BACK SAFE DATA -- NO PASSWORD/SALT
      res.json(user);
});

router.route('/getBirdImage')
  .post(birdsController.getBirdImage);

router.route('/api/birds')
  .get(birdsController.all) // WORKING
  .post(birdsController.create); // WORKING

router.route('/api/birds/:id')
  .get(birdsController.show); // WORKING

router.route('/api/users')
  .get(usersController.all) // WORKING
  .post(usersController.create); // WORKING


router.route('/api/users/:id')
  .get(usersController.show) // WORKING
  .patch(usersController.update) // WORKING
  .delete(usersController.delete); // WORKING

router.route('/api/users/:id/entries')
  .get(entriesController.all) // WORKING
  .post(entriesController.create); // WORKING

router.route('/api/users/:id/entries/:id')
  .get(entriesController.show)
  .patch(entriesController.update) // WORKING
  .delete(entriesController.delete); // WORKING

module.exports = router;
