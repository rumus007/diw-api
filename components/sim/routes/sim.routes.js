var express = require('express');
router = express.Router();
var simCtrl = require("./../controller/sim.controller");


router.route('/')
    .get()
    .post(simCtrl.post);

router.route('/search')
    .get()
    .post();

router.route('/:id')
    .get()
    .put()
    .delete();

module.exports = router;
