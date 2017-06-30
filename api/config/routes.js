const express = require('express'),
      router = express.Router(),
      path = require('path'),
      passport = require('passport');
      usersController = require('../controllers/usersController'),
      birdsController = require('../controllers/birdsController'),
      entriesController = require('../controllers/entriesController');

router.route('/')
  .get(function(req, res) {
    res.sendFile(path.join(__dirname + '/../../build/index.html'));
  });

router.post('/api/login', passport.authenticate('local'), function(req, res) {
  const account = req.user;
  accountsController.getAccounts(account, function(acct) {
    res.json(acct);
  });
});

router.get('/api/google', passport.authenticate('google', {
  scope:['profile','email']
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
