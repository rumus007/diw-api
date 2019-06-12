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

function update(){

}

function update(){

}

function remove(){

}

module.exports = {
    find, insert, update, remove
}