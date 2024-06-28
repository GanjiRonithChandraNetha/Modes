const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    teacherName:{
        type:String,
        required:true,
    },
    teacherMNo:{type:Number},
    password:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})
module.export = mongoose.model('teacher',teacherSchema)