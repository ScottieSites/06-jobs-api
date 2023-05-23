const mongoose = require('mongoose')

const designFirmSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Please provide company name'],
        trim:true,
        maxLength:50
    },
    accountNumber:{
        type:Number,
        required:[true, 'Please provide account number'],
        trim:true,
        maxLength:8
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user']
    }
}, {timestamps:true})

module.exports = mongoose.model('Job', designFirmSchema)