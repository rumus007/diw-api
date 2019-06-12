var labModel = require("./../models/product.model").labModule;
var mapLab = require("./../helpers/map_product_req");

function find(condition){
    return new Promise(function(resolve, reject){
        labModel.find(condition)
            .exec(function(err, results){
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            });
    });
}

function insert(data){
    return new Promise(function(resolve, reject){
        var newLab = new labModel({});
        mapLab(newLab, data);
        newLab.save(function(err, saved){
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
        labModel.findById(id)
            .exec(function(err, labProd){
                if(err){
                    reject(err);
                }else{
                    if(labProd){
                        mapLab(labProd, data);
                        labProd.save(function(err, update){
                            if(err){
                                reject(err);
                            }else{
                                resolve(update);
                            }
                        });
                    }else{
                        reject({
                            message: 'Lab Product not found',
                            status: 400
                        });
                    }
                }
            });
    });
}

function remove(id, cb){
    labModel.findByIdAndDelete(id)
        .exec(function(err, deleted){
            if(err){
                cb(err);
            }else{
                cb(null, deleted);
            }
        });
}

module.exports = {
    find, insert, update, remove
}