var express = require('express');
router = express.Router();
var labCtrl = require('./../controller/lab.controller');

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