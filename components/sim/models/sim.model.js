var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SimSchema = new Schema({
    company: {
        type: String,
        enum: ['ncell','ntc','smart'],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    soldPrice: {
        type: Number,
        required: true
    },
    rechargeAmount: {
        type: Number,
        required: true,
    },
    rechargeType: {
        type: Number,
        enum: [1,2,3] //1 for recharge card, 2 for master sim, 3 for online 
    }
},
{
    timestamps: true
});

var SimModel = mongoose.model('sim', SimSchema);
module.exports = SimModel;