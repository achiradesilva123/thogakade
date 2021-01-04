
const express=require('express');

const orderController=require("../controller/OrderConroller");

const router=express.Router();

router.post('/placeorder',orderController.placeOrder);



module.exports=router;
