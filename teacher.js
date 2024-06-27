const mongoose = require('mongoose')
const teacherSchema = new mongoose.Schema({
    teacherId:{
        type:String,
        required:true,
        unique:true
    },
    teacherName:{
        type:String,
        required:true,
    },
    classes:{type:[Stirng]},
    teacherMNo:{type:Number},
    gender:{
        type:String,
        required:true,
        enum:['female,male']
    }
})
module.export = mongoose.model('teacher',teacherSchema)