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

}

function remove(id){

}

module.exports = {
    insert, find, update, remove
}