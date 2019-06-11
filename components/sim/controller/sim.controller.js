var simQuery = require('./../queries/sim.query');

function get(req, res, next){

}

function post(req, res, next){
    var data = req.body;
    console.log("data in controller>>", data);
    simQuery.insert(data)
        .then(function(done){
            res.status(200).json(done);
        })
        .catch(function(err){
            next(err);
        })
    
}

function put(req, res, next){

}

function remove(req, res, next){

}

module.exports = {
    get, post, put, remove
}