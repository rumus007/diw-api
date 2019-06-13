var handicraftQuery = require('./../queries/handicraft.query');

function get(req, res, next){
    var condition = {}
    handicraftQuery.find(condition)
        .then(function(results){
            res.status(200).json(results);
        })
        .catch(function(err){
            next(err);
        })
}

function post(req, res, next){
    var data = req.body;
    console.log("In controller>>", data);
    handicraftQuery.insert(data)
        .then(function(saved){
            res.status(200).json(saved);
        })
        .catch(function(err){
            next(err);
        });
}

function getById(req, res, next){
    var id = req.params.id;
    var condition = {
        _id: id
    }

    handicraftQuery.find(condition)
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function(err){
            next(err);
        })
}


module.exports = {
    post, get, getById
}