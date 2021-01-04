
const express=require('express');

const userController=require("../controller/userController");

const router=express.Router();

router.post('/save',userController.saveUser);
router.get('/checkuserlogin',userController.checkuserlogin);


module.exports=router;
