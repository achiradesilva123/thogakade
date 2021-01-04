 const  customerDto=require('../model/customerDto');

const saveCustomer=(req,resp)=>{
 const customer=new customerDto({
     customerId : req.body.customerId,
     customerName : req.body.customerName,
     customerAddress : req.body.customerAddress,
     customerSalary : req.body.customerSalary
 });

 customer.save().then(result=>{
     console.log(result);
     resp.status(200).json({"Saved":true,data:result});
 }).catch(err=>{
    resp.status(500).json({err});
 });

 };

 const deleteCustomer=(req,resp)=>{
    customerDto.deleteOne({customerId : req.headers.id}).then(result=>{
        console.log(result);
        resp.status(200).json({Isdelete : true});
    }).catch(err=>{
        resp.status(500).json(err);
    });
 };

 const updateCustomer=(req,resp)=>{
    customerDto.updateOne(
        {customerId : req.body.customerId},
        {
            $set: {
                customerName: req.body.customerName,
                customerAddress: req.body.customerAddress,
                customerSalary: req.body.customerSalary
            }
        }).then(result=>{
            if(result.nModified>0){
                resp.status(200).json({Isupdate : true});
            }else {
                resp.status(200).json({Isupdate : false});
            }
    }).catch(err=>{
            resp.status(500).json(err);
    })
 };

 const getAllCustomer=(req,resp)=>{
    try {
        customerDto.find().then(result=>{
            resp.status(200).json({data: result});
        }).catch(err=>{
           resp.status(500).json(err);
        });
    }catch (e) {

    }
 };

 const getCustomerById=(req,resp)=>{

 };

 module.exports={
     saveCustomer,
     deleteCustomer,
     updateCustomer,
     getAllCustomer,
     getCustomerById
 }





