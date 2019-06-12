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
    console.log("in controller>>",data);
    labQuery.insert(data)
        .then(function(done){
            res.status(200).json(done);
        })
        .catch(function(err){
            next(err);
        })
}


module.exports = {
    post, get
}