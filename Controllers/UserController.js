const express= require ('express')
const UserModel = require ('../Models/Usermodel')
var bcrypt = require('bcryptjs');
const Usermodel = require('../Models/Usermodel');
const CreateUser = async (req,res) =>{
    let {name, email, password} = req.body;
    if(!name){
        res.json ({msg:'name is required',sucess:false})
    }
    if(!email){
        res.json ({msg:'email is required',sucess:false})
    }
    if(!password){
        res.json ({msg:'password is required',sucess:false})
    }
    let find = await UserModel.findOne({email:req.body.email})
    if(find){
        return res.json ({msg:"User already exists",success:false})
    }else{
        let password = req.body.password
        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(password, salt);
    
    try {
        const User = await UserModel.create({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword
          })
          return res.json({msg:"User Details Saved Successfully",User,Success:true})
    } catch (error) {
        return res.json({msg:"error in saving users details",error,success:false})
    }
}
}


module.exports = {
CreateUser
}