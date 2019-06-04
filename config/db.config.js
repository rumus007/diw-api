var mongoose = require('mongoose');
var config = require('./index');
var localDbUrl = 'mongodb://localhost:27017/diwDB';
mongoose.connect(localDbUrl, function(err, done){
    if(err){
        console.log('MongoDB Connection failed');
    }else{
        console.log('Database connection success');
    }
});