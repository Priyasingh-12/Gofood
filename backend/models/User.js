const mongoose = require('mongoose');

const {Schema} = mongoose ;

const UserSchema = new Schema({
    name:{
        type:"string",
        required:true
    },
    location:{
        type:"string",
        required:true
    },
     email:{
        type:"string",
        required:true
    },
    password:{
        type:"string",
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('user',UserSchema)