const mongoose = require('mongoose');
const studentschema = new mongoose.Schema({
    email:String,
    password:Number,
    
});
module.exports= mongoose.model('login',studentschema);