var jwt = require('jsonwebtoken');
var config = require('./../config');

var UserModel = require('./../models/user.model');

module.exports = function(req, res, next){
    var token;
    if(req.headers['x-access-token']){
        token = req.headers['x-access-token']
    }
    if(req.headers['authorization']){
        token = req.headers['authorization']
    }
    if(req.headers['token']){
        token = req.headers['token']
    }
    if(req.query.token){
        token = req.query.token;
    }
    if(token){
        jwt.verify(token, config.jwt_secret, function(err, verified){
            if(err){
                return next(err);
            }
            

            UserModel.findOne({_id: verified.id}, function(err, user){
                if(err){
                    return next(err);
                }
                if(user){
                    req.loggedInUser = user;
                    return next();
                }
                else{
                    next({
                        message: 'User Not Found In System'
                    });
                }
            })
        });
    }else{
        next({
            message: 'Token Not Provided'
        });
    }
}