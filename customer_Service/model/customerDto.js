const mongoose=require("mongoose");
const customerDto=new mongoose.Schema({
    customerId : {
        type : String,
        required : true
    },
    customerName :{
        type : String,
        required : true
    },
    customerAddress :{
        type : String,
        required : true
    },
    customerSalary :{
        type : Number,
        required : true
    }
});

module.exports=mongoose.model('customer',customerDto);