var express = require('express'),
    router = express.Router(),
    path = require('path'),
    usersController = require('../controllers/usersController'),
    birdsController = require('../controllers/birdsController'),
    entriesController = require('../controllers/entriesController');

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
  .patch(entriesController.update) // WORKING
  .delete(entriesController.delete); // WORKING

router.route('*')
  .get(function(req, res) {
    res.sendFile(path.join(__dirname + '/../../views/index.html'));
  });

module.exports = router;
