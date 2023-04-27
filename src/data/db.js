const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
const url = "mongodb+srv://nguyennhathao11c2:Hao%407708801314520@cluster0.wq1pija.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})
require('./categoryModel');
// require('./product.model');