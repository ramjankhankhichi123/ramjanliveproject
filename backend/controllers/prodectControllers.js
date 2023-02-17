
const mongodb = require('mongodb')
const db = require('../config');
db();
const express = require('express');
const app= express();
app.use(express.json());
const asyncHandlar = require('express-async-handler');
const user = require('../Model/prodectModel');
const { Error } = require('mongoose');

//const router = require('../routes/productRoutes');

const getprodect= asyncHandlar (async(req,res)=>{
    let data = await user.find();
    res.status(200).json(data)
    console.log("====>",data);
})

const setprodect= asyncHandlar (async(req,res)=>{
    console.log('==body==>',req.body);
const {title,dis,price,quentity} = req.body;
if(!title && !dis && !price && !quentity){
    res.status(400)
    throw new Error("please add ALL Fileds");
}
    let result = await user.create(
        {
            title:req.body.title ,
            dis:req.body.dis,
            price:req.body.price,
            quentity:req.body.quentity
        })
    res.status(200).json(result)
    console.log("===>",result);
})

const updateprodect= asyncHandlar(async(req,res)=>{
    // let data = await db();
    // let result = await user.updateOne({_id:new mongodb.ObjectId(req.params._id)},{$set:req.body})
    const fintId =await user.findById(req.params._id);
    if(!fintId){
        res.status(400)
        res.send('User not found')
    }
    const update = await user.findByIdAndUpdate(req.params._id, req.body,{
        new : true
    })
    console.log("=====>",updateprodect);
    
    res.status(200).json({message: `update data ${req.params._id}`})
})

const deleteprodect= asyncHandlar (async(req,res)=>{
    let findId = await user.findById(req.params._id) 
    if(!findId){
        res.status(400);
        res.send('Use not found')
    }
    await findId.remove();
    res.status(200).json({message:`delete data ${req.params._id}`});
})

module.exports={
    getprodect,
    setprodect,
    updateprodect,
    deleteprodect

}
