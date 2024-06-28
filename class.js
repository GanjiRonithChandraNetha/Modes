const mongoose = require('mongoose')
const Class= new mongoose.Schema({
    teacher:{type:Object,require:true},
    section:{
        type:String,
        enum:["preprimary"]
    },
    year:{
        type:String,
        enum:["Entery","I","II","III"],
        required:true
    },
    student:[String]
})
module.exports=mongoose.model('Class',Class)