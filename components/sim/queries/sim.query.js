var SimModel = require("./../models/sim.model");
var mapSim = require("./../helpers/map_sim_req");


function find(condition) {
    return new Promise(function(resolve, reject){
        SimModel.find(condition)
            .exec(function(err, results){
                if(err){
                    reject(err);
                }
                else{
                    resolve(results);
                }
            });
    });
}

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

function update(id, data) {
    return new Promise(function(resolve, reject){
        SimModel.findById(id)
            .exec(function(err, sim){
                if(err){
                    reject(err);
                }
                if(sim){
                    mapSim(sim, data);
                    sim.save(function(err, updated){
                        if(err){
                            reject(err);
                        }else{
                            resolve(updated);
                        }
                    });
                }else{
                    reject({
                        message: 'Product not found',
                        status: 400  
                    });
                }
            });
    });
}

function remove(id, cb) {
    SimModel.findByIdAndDelete(id)
        .exec(function(err, deleted){
            if(err){
                cb(err);
            }else{
                cb(null, deleted);
            }
        });
}




module.exports = {
    insert, find, remove, update
}