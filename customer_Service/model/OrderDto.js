
const mongoose=require('mongoose');

const orderDto= new mongoose.Schema({
    cid :{
        type :String,
        required :true
    },
    date :{
        type :Date,
        required :true
    },
   items :{
        type :Array,
        required :true
    }
});

module.exports=mongoose.model('User',userDto);
