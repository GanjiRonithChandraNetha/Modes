const mongoose = require('mongoose')
const report = new mongoose.Schema({
    Term:{
        type:String,
        required:true,
        unique:true
    },
    Comment:{
        type:String,
        default:'No Report Needed'
    }
})
const StudentReport = new mongoose.Schema({
    RegNo:{
        type:String,
        required:true,
        unique:true
    },
    PersonalQA:[{
        question:String,
        answer:String
    }],
    SocialQA:[{
        question:String,
        answer:String
    }],
    AcademincQA:[{
        question:String,
        answer:String
    }],
    OccupationalQA:[{
        question:String,
        answer:String
    }],
    RecreationalQA:[{
        question:String,
        answer:String
    }],
    Report:report
})

module.export = mongoose.model('student',StudentReport)