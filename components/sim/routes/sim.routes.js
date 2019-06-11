var express = require('express');
router = express.Router();
var simCtrl = require("./../controller/sim.controller");


router.route('/')
    .get(simCtrl.get)
    .post(simCtrl.post);

router.route('/search')
    .get()
    .post();

router.route('/:id')
    .get(simCtrl.getById)
    .put(simCtrl.put)
    .delete(simCtrl.remove);

module.exports = router;
