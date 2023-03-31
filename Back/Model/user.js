const mongoose = require('mongoose');
const {Schema} = mongoose;
const UserSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true 
      },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true
    },
    profilePicture:{
        type:String,
        default:"",
    },
    coverPicture:{
        type:String,
        default:"",
    },
    followers:{
       type:Array,
       default:[]
    },
    following:{
        type:Array,
        default:[]
     },
    desc:String
    },
{timestamps:true}
);

module.exports = mongoose.model('user',UserSchema);