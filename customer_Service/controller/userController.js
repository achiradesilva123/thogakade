const userDto=require('../model/userDto');
const bcrypt = require('bcrypt');

const saveUser=(req,resp)=>{

    bcrypt.hash(req.body.userPassword, 10, function(err, hash) {
        const  user=new userDto({
            userName : req.body.userName,
            userEmail : req.body.userEmail,
            userPassword : hash
        });
        user.save().then(result=>{
            resp.status(200).json({isRegisterd : true});
        }).catch(err=>{
            resp.status(500).json(err);
        })
    });
};

const checkuserlogin=(req,resp)=>{

    userDto.findOne({userEmail : req.headers.email}).then(result=>{
        if(result!=null){
            // Load hash from your password DB.
            bcrypt.compare(req.headers.password, result.userPassword, function(err, res) {
                    resp.status(200).json(res);
            });
        }
    }).catch(err=>{
       resp.status(500).json(err)
    });

}

module.exports={
    saveUser,
    checkuserlogin
}
