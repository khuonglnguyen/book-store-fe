const mongoose = require('mongoose');

var categorySchema = new mongoose.Schema({
    category:{
        type:String
    },
    description:{
        type:String
    }
})

// custom validation for email

mongoose.model('Category',categorySchema);