const orderDto=require('../model/OrderDto');
const bcrypt = require('bcrypt');

const placeOrder=(req,resp)=>{

   try{
       const order=new orderDto({
           cid : req.body.cid,
           date : new Date().toISOString().split('T')[0],
           items : req.body.items
       });

       order.save().then(res=>{
           resp.status(200).json({ isSaved :true});
       }).catch(err=>{
           resp.status(500).json(err);
       })

   }catch (e) {
       console.log(e.message);
   }
};

module.exports={
    placeOrder
}
