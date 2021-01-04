const express=require('express');

const customerController=require("../controller/customerController");

const router=express.Router();

router.post('/save',customerController.saveCustomer);
router.get('/getAll',customerController.getAllCustomer);
router.get("/getById",customerController.getCustomerById);
router.put("/update",customerController.updateCustomer);
router.delete("/delete",customerController.deleteCustomer);

module.exports=router;

