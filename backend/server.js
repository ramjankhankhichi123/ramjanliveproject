// const mongodb = require('mongodb')
const express=require('express');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
app.use('/api/user',require('./routes/userroutes'));
app.use('/api/prodect',require('./routes/productRoutes'))
const {errorHandler} = require('./middleware/errormiddleware');

const connectdb = require('./config/db');
const { application } = require('express');
connectdb()
app.use(errorHandler);
app.use(express.json())

app.get('/',(req,res)=>{
//    res.send("enter the aname") 
    
})
// app.listen(5000);
app.listen(port,()=>{
    console.log(`port is colled ${port}`);
})