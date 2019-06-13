var express = require('express');
router = express.Router();
var handicraftCtrl = require('./../controller/handicraft.controller');

router.route('/')
    .get(handicraftCtrl.get)
    .post(handicraftCtrl.post);

router.route('/search')
    .get()
    .post();
    
router.route('/:id')
    .get(handicraftCtrl.getById)
    .put()
    .delete();
    
module.exports = router;