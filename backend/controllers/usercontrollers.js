const mongodb = require('mongodb')
const db = require('../config');
db();
const asyncHandlar = require('express-async-handler');
const user = require('../Model/userSchema')
const bcrypt = require('bcryptjs');
const login = require('../Model/loginModel');

const getuser= asyncHandlar (async(req,res)=>{
    let data = await user.find();
    res.status(200).json(data)
    console.log("====>",data);
})

const setUsers= asyncHandlar (async(req,res)=>{
    let result = await user.create(
        {
        name:req.body.name ,
        email:req.body.email,
        password:req.body.password,
        number:req.body.number })
    res.status(200).json(result)
    console.log("===>",result);
});

const loginserver=asyncHandlar(async (req,res)=>{

    const {email,password} = req.body;
    const userExists = await login.findOne({ email })
        if (userExists) {
            res.status(400);
            throw new Error('Email already exists')
        }
        const passexits = await login.findOne({password})
        if(passexits){
            res.status(400);
            throw new Error('Password already exists')
        }
        else{
    let result = await login.create({email:req.body.email,password:req.body.password});
    res.status(200).json(result)}
        })







// const setUsers = asyncHandlar(async (req, res) => {
//     // if (!req.body.name || !req.body.email || !req.body.password || !req.body.MoNumber) {
//     // res.status(400)
//     // throw new Error('Please add a All body filds')
//     // }
//     const { name, email, password, number } = req.body;
//     if (!name && !email && !password && !number) {
//         res.status(400);
//         throw new Error('Please add a All body filds')
//     }
//     //check if user exists
//     const userExists = await user.findOne({ email })
//     if (userExists) {
//         res.status(400);
//         throw new Error('User already exists')
//     }

//     //hash password 
//     const salt = await bcrypt.getSalt(10)
//     const hashedPassword = await bcrypt.hash(password, salt)

//     //create user
//     const data = await user.create({
//         name,
//         email,
//         password: hashedPassword,
//         number: number
//     })
//     console.log("====>", data);
//     if (data) {
//         res.status(201).json({
//             _id: data.id,
//             name: data.name,
//             email: data.email,
//             number: data.number
//         })
//     } else {
//         res.status(400)
//         throw new Error('Invalid User Data')
//     }
//     //  res.status(200).json({ message: data });

// })

const updateuser= asyncHandlar(async(req,res)=>{
    // let data = await db();
    // let result = await user.updateOne({_id:new mongodb.ObjectId(req.params._id)},{$set:req.body})
    const {name,email,password,number} = req.body;
if(!name && !email && !password && !number){
    res.status(400).json({message:"please add ALL Fileds"});
}
    const fintId =await user.findById(req.params._id);
    if(!fintId){
        res.status(400)
        res.send('User not found')
    }
    const update = await user.findByIdAndUpdate(req.params._id, req.body,{
        new : true
    })
    console.log("=====>",updateuser);
    
    res.status(200).json({message: `update data ${req.params._id}`})
})

const deleteuser= asyncHandlar (async(req,res)=>{
    let findId = await user.findById(req.params._id) 
    if(!findId){
        res.status(400);
        res.send('Use not found')
    }
    await findId.remove();
    res.status(200).json({message:`delete data ${req.params._id}`});
})

module.exports={
    getuser,
    setUsers,
    updateuser,
    deleteuser,
    loginserver

}