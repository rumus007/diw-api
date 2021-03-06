var express = require('express');
router = express.Router();
var labCtrl = require('./../controller/lab.controller');

router.route('/')
    .get(labCtrl.get)
    .post(labCtrl.post);

router.route('/search')
    .get()
    .post();
    
router.route('/:id')
    .get(labCtrl.getById)
    .put(labCtrl.put)
    .delete(labCtrl.remove);
    
module.exports = router;