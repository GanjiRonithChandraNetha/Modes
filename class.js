const mongoose = require('mongoose')
const classes = new mongoose.Schema({
    ClassId:{
        type:String,
        required:true
    },
    Section:{
        type:String,
        required:true
    },
    Class:{
        type:String,
        required:true
    },
    StdSet:{
        type:[String],
        required:true
    },
    Personal:{
        type:[String],
    },
    Social:{
        type:[String],
    },
    Academic:{
        type:[String],
    },
    Occupational:{
        type:[String],
    },
    Recreational:{
        type:[String],
    }
})
module.export = mongoose.model('classes',classes)