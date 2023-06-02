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
        required:[true, 'Please provide Salesforce case number'],
        trim:true,
        maxLength:100
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide user']
    }
}, {timestamps:true})

 module.exports = mongoose.model('Account', designFirmSchema)