var express = require('express');
router = express.Router();
var handicraftCtrl = require('./../controller/handicraft.controller');

router.route('/')
    .get()
    .post();

router.route('/search')
    .get()
    .post();
    
router.route('/:id')
    .get()
    .put()
    .delete();
    
module.exports = router;