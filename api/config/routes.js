var express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/usersController'),
    birdsController = require('../controllers/birdsController'),
    entriesController = require('../controllers/entriesController');

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

module.exports = router;
