// const {MongoClient} =require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env);
console.log("=======>",process.env.MONGO_URL)

const connectdb = async (err)=>{
    console.log("hello i am ramjan...");
    try{
       
        const conn = await mongoose.connect (process.env.MONGO_URL)
        // console.log('====>',conn);
    }

    catch(error){
        // console.log("====error====",error);
        process.exit(1)
    }
}
module.exports = connectdb;