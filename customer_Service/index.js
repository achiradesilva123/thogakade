const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');
var cors = require('cors');
//------------------------------------------//
const customerRouter=require('./route/customerRoute');
const userRouter=require('./route/userRoute');
//------------------------------------------//

const app = express();

app.use(cors());
app.use(bodyParser());


app.use(express.json({limit:"50mb"}));
// app.get('/', function (req, res) {
//     res.send('Hello World')
// });

//standard ek mongo ekk server eka intialize karana
mongoose.connect('mongodb://localhost:27017/thogakade', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
     app.listen(3000,()=>{
        console.log(" customer service server has been started on port 3000")
     });
 }).catch((err)=>{
     console.log("try Again!");
 });

//------------------------------------------//
app.use('/api/v1/customer',customerRouter);
app.use('/api/v1/user',userRouter);
//------------------------------------------//


