var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: Number,
        enum: [1,2], //1 for adminm 2 for user
        default: 2
    },
    updateBy: String,
},
{
    timestamps: true
});
var UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;