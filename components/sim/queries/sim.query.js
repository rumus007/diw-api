var SimModel = require("./../models/sim.model");
var mapSim = require("./../helpers/map_sim_req");

function insert(data) {
    return new Promise(function(resolve, reject){
        var newSim = new SimModel({});
        mapSim(newSim, data);
        newSim.save(function(err, saved){
            if(err){
                reject(err);
            }else{
                resolve(saved);
            }
        });
    });
}


module.exports = {
    insert
}