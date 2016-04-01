var express = require('express'),
    router = express.Router(),
    usersController = require('../controllers/usersController'),
    birdsController = require('../controllers/birdsController');

router.route('/api/birds')
  .get(birdsController.all)
  .post(birdsController.create);

router.route('/api/users')
  .get(usersController.all)
  .post(usersController.create);

module.exports = router;
