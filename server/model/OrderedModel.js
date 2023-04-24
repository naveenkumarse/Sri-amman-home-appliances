const mongoose = require("mongoose");
const OrderedSchema = new mongoose.Schema({
   
    date:{
        type: String,
    },
    uid: {
        type: String,
        required: true,
    },
    total: {
        type: Number,
       
    },
  
  

});

const Ordered = mongoose.model("Ordered", OrderedSchema);

module.exports = Ordered;