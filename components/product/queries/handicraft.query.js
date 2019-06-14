var handicraftModel = require('./../models/product.model').handicraftModule;
var handicraftMap = require('./../helpers/map_product_req');

function find(condition){
    return new Promise(function(resolve, reject){
        handicraftModel.find(condition)
            .exec(function(err, results){
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            })
    });
}

function insert(data){
    return new Promise(function(resolve, reject){
        var newHandicraft = new handicraftModel({});
        handicraftMap(newHandicraft, data);
        newHandicraft.save(function(err, saved){
            if(err){
                reject(err);
            }else{
                resolve(saved);
            }
        });
    });
}


function update(id, data){
    return new Promise(function(resolve, reject){
        handicraftModel.findById(id)
            .exec(function(err, product){
                if(err){
                    reject(err);
                }else{
                    if(product){
                        handicraftMap(product, data);
                        product.save(function(err, updated){
                            if(err){
                                reject(err);
                            }else{
                                resolve(updated);
                            }
                        }); 
                    }else{
                        reject({
                            message: 'Handicraft product not found',
                            status: 400
                        });
                    }
                }
            });
    });
}

function remove(id,cb){
    handicraftModel.findByIdAndDelete(id)
        .exec(function(err, deleted){
            if(err){
                cb(err);
            }else{
                cb(null, deleted);
            }
        });
}

module.exports = {
    insert, find, update, remove
}