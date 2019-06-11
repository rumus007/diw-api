var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    quantity: Number,
    soldPrice: Number,
    costPrice: Number,
},
{
    timestamps: true
});

var productModule = mongoose.model('product', productSchema);
module.exports = productModule;