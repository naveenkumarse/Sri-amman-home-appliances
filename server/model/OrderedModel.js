const mongoose = require("mongoose");
const OrderedSchema = new mongoose.Schema({
   
    date:{
        type: String,
    },
    uid: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
    },
    email:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:Number
    }
  
  

});

const Ordered = mongoose.model("Ordered", OrderedSchema);

module.exports = Ordered;