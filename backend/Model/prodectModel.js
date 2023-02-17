const mongoose = require('mongoose');
const prodectschema = new mongoose.Schema({
    title:{
    type:String,
    required:[true,'please add an title']
    },
    dis:{
    type:String,
     required:[true,'please add an discription']
    },
    price:{
        type:String,
         required:[true,'please add an price']
        },
    quentity:{
            type:String,
             required:[true,'please add an quentity']
            }
},
{
    timestamps: true
}
);
module.exports= mongoose.model('products',prodectschema);