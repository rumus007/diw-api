var labQuery = require("./../queries/lab.query");


function get(req, res, next){
    var condition = {}
    labQuery.find(condition)
        .then(function(data){
            res.status(200).json(data);
        })  
        .catch(function(err){
            next(err);
        })
}

function post(req, res, next){
    var data = req.body;
    labQuery.insert(data)
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
    labQuery.find(condition)
        .then(function(done){
            res.status(200).json(done);
        })
        .catch(function(err){
            next(err);
        });
}

function put(req, res, next){
    var id = req.params.id;
    var data = req.body;
    labQuery.update(id, data)
        .then(function(updated){
            res.status(200).json(updated);
        })
        .catch(function(err){
            next(err);
        })
}

function remove(req, res, next){
    labQuery.remove(req.params.id, function(err, deleted){
        if(err){
            next(err);
        }else{
            if(deleted){
                res.status(200).json(deleted)
            }else{
                next({
                    message: "Cannot find product",
                    status: 400
                })
            }
            
        }
    });
}


module.exports = {
    post, get, getById, remove, put
}