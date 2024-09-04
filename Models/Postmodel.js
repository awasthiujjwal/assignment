const mongoose = require ('mongoose');
const PostSchema =new mongoose.Schema ({
    Title:{
        type:String,
        require:true,
    },
    Image:{
        type:String,
        
    },
    Description:{
        type:String,
        require:true,
    },
    User:{
        type:mongoose.Schema.ObjectId,
        ref:'RegisterUsers',
        require: [true,"user id is required"]
        
    },
},{timestamps:true})
module.exports = mongoose.model('Blogs',PostSchema);