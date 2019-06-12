var simQuery = require('./../queries/sim.query');

function get(req, res, next){
    var condition = {}
    simQuery.find(condition)
        .then(function(done){
            res.status(200).json(done);
        })
        .catch(function(err){
            next(err);
        })

}

function post(req, res, next){
    var data = req.body;
    simQuery.insert(data)
        .then(function(done){
            res.status(200).json(done);
        })
        .catch(function(err){
            next(err);
        })
    
}

function getById(req, res, next){
    var id = req.params.id;
    
    var condition = {
        _id: id
    }
    simQuery.find(condition)
        .then(function(done){
            console.log(done);
            res.status(200).json(done);
        })
        .catch(function(err){
            next(err);
        })
}

function put(req, res, next){
    var id = req.params.id;
    var data = req.body;
    simQuery.update(id, data)
        .then(function(data){
            res.status(200).json(data);
        })
        .catch(function(err){
            next(err);
        })
}

function remove(req, res, next){
    simQuery.remove(req.params.id, function(err, deleted){
        if(err){
            next(err);
        }else{
            if(deleted){
                res.status(200).json(deleted);
            }else{
                next({
                    message: "Cannot find sim detail",
                    status: 400
                })
            }
        }
    });
}

module.exports = {
    get, post, put, remove, getById
}