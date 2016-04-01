var express = require('express'),
    router = express.Router(),
    birdsController = require('../controllers/birdsController');

router.route('/api/birds')
  .get(birdsController.all)
  .post(birdsController.create);

module.exports = router;
