const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{required:true, type:String},
    lastName:{required:true, type:String},
    age:{required:true, type:Number},
    adress:{type:String},
})

module.exports=mongoose.model("User",userSchema)