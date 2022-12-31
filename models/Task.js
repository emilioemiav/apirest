const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{required:true, type:String},
    description:{required:false, type:String},
})

module.exports=mongoose.model("Task",taskSchema)