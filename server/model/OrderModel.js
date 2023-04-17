const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    uid: {
        type: String,
        required: true,
    },
    cid: {
        type: String,
        
    },
    pid: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: true,
    },
    price: {
        type: Number,
        required: 0,
    },
    placeorder:{
        type:Boolean,
        default: false
    }

});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;