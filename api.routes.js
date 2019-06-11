var router = require('express').Router();
var authenticate = require('./middlewares/authenticate');
var simRoute = require('./components/sim/routes/sim.routes');

//load all components here

router.use('/sim',authenticate,simRoute);

module.exports =router;