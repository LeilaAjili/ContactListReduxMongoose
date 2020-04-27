let mongoose = require('mongoose')


//contact schema
let contactSchema = mongoose.Schema({
    name:{
        type : String,
        required:false
    },
    phone:{
        type: Number,
        required : false
    },
    mail:{
        type:String,
        required:false
    },
    link:{
        type:String,
        required:false
    }
})

let Contact = module.exports = mongoose.model('Contact', contactSchema)