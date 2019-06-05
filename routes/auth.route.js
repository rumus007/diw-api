var express = require('express');
var router = express.Router();
var UserModel = require('./../models/user.model');
var passwordhash = require('password-hash');
var map_user = require('./../helpers/map_user_req');
var config = require('./../config');
var generateToken = require('./../helpers/create-token');


module.exports = function(){
    router.route('/login')
        .post(function(req, res, next){
            UserModel.findOne({
                username: req.body.username,
            })
                .exec(function(err, user){
                    if(err){
                        return next(err);
                    }
                    if(user){
                        var isMatch = passwordhash.verify(req.body.password, user.password);
                        if(isMatch){
                            var token = generateToken.createToken({
                                id: user._id,
                                name: user.username
                            }, config.jwt_secret);
                            res.json({
                                user: user,
                                token: token
                            })
                        }else{
                            next({
                                message: 'Invalid Login Credentials'
                            })
                        }
                    }else{
                        next({
                            message: 'Invalid Login Credentials'
                        })
                    }
                })
        });

    router.route('/register')
       .post(function(req, res, next){
           var newUser = new UserModel({});
           var newMappedUser = map_user(newUser, req.body);
           console.log('New Mapped User>>', newMappedUser);
           newMappedUser.save(function(err, saved){
                if(err){
                    return next(err);
                }
                res.status(200).json(saved);
           });
       }) 



        return router
}