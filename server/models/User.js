const mongoose = require('mongoose');

const Schema = mongoose.Schema ;
const UserSchema = new Schema({
    googleId:{ type:String,require:true},
    displayName:{ type:String,required:true},
    firstName:{ type:String,require:true},
    lastName:{ type:String,require:true},
    profileImage:{ type:String,require:true},
    createdAt:{ type:Date,default:Date}
});

module.exports = mongoose.model('User', UserSchema);