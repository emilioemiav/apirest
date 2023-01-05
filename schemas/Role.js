const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name:{required:true, type:String},
    description:{required:false, type:String},
})

module.exports=mongoose.model("Role",roleSchema)