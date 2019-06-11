var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name:{
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

var labModule = mongoose.model('lab', productSchema);
var handicraftModule = mongoose.model('handicraft', productSchema);
module.exports = {
    labModule, handicraftModule
}