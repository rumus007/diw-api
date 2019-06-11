var router = require('express').Router();
var authenticate = require('./middlewares/authenticate');
var simRoute = require('./components/sim/routes/sim.routes');
var labRoute = require('./components/product/routes/lab.route');
var handicraftRoute = require('./components/product/routes/handicraft.route');

//load all components here

router.use('/sim',authenticate,simRoute);
router.use('/lab',authenticate, labRoute);
router.use('/handicraft',authenticate, handicraftRoute);

module.exports =router;