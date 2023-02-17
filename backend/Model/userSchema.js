const mongoose = require('mongoose');
const studentschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    number:String
});
module.exports= mongoose.model('student',studentschema);