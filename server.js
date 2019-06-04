var express = require('express');
var config = require('./config/index'); //config file
//load inbuilt middlewares
var bodyParser = require('body-parser');
var path = require('path');
//load third party middlewares
var morgan = require('morgan');
//load middlewares


var app = express();
app.use(morgan('dev'));

require('./config/db.config');
//inbuilt middlewares


//routing level middlewares




app.use(function(req, res, next){
    res.status(404)
    next({
        message: 'No where to go',
        status: 404
    })
});


app.use(function(error, req, res, next){
    console.log('I am error handling middlware');
    res.json({
        msg: error.message || error,
        status: error.status || 400,
    })
});


app.listen(config.port, function(err, done){
    if(err){
        console.log('Error in establishing server');
    }else{
        console.log('Server listening at port>>', config.port);
        console.log('Press CTRL + C to exit');
    }
});