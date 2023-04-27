const mongoose = require('mongoose');
const {Schema} = mongoose;
const PostSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
   postPicture:String,
   desc:String,
    likes:{
        type:Array,
        default:[]
    }
   },
{timestamps:true}
);

module.exports = mongoose.model('post',PostSchema);