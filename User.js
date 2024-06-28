const Mongoose = require('mongoose')
const User = new Mongoose.Schema({
    Id:{
        type:Object,
        unique:true,
        required:true
    },
    Password:{
        unique:true,
        required:true,
        type:String
    },
    Roll:{
        type:String,
        required:true,
        enum:["teacher","sutudent","admin","pricipal"]
    }
})