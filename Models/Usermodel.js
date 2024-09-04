const mongoose = require ('mongoose')
const Userschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is required'],
        maxlength:[50,'name sholud not exceed over 50 characters'],
        minlength:[3,'name should be over of minimum 3 characters']
    },
    email:{
        type:String,
        Unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        // maxlength:[12,"password sholud be of 12 characters"]
    },
    ProfilePic:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg"
    },
    Coverpic:{
        type:String,
        default:"https://static.vecteezy.com/system/resources/thumbnails/009/209/212/small/neon-glowing-profile-icon-3d-illustration-vector.jpg"
    }
},{Timestamps:true})

module.exports = mongoose.model ('RegisterUsers',Userschema);